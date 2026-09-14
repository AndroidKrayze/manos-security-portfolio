import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { workflowModes, type WorkflowModeId } from '../content/site'
import styles from './WorkflowVisual.module.css'

const MODE_ORDER: WorkflowModeId[] = ['automation', 'appsec', 'crypto']

const PATHS: Record<string, string> = {
  main: 'M70 210 C150 210 170 118 250 118 C330 118 340 214 420 214 C500 214 520 132 600 132 C640 132 655 188 690 230',
  'assess-owner': 'M250 118 C290 70 330 70 390 96 C405 104 412 160 420 214',
  'assess-risk': 'M250 118 C290 170 330 196 390 208 C405 212 412 214 420 214',
  'assess-crypto': 'M250 118 C275 210 310 286 390 268 C408 262 414 236 420 214',
  'engineer-automate': 'M420 214 C455 150 500 128 560 128 C575 128 590 130 600 132',
  'engineer-control': 'M420 214 C470 214 530 180 600 132',
  'engineer-migrate': 'M420 214 C460 270 520 250 575 190 C588 168 596 146 600 132',
  'validate-main': 'M600 132 C630 132 650 180 690 230',
  'operate-main': 'M690 230 C700 248 704 262 708 278',
}

const NODES: Array<{
  id: keyof (typeof workflowModes)['automation']['nodes']
  x: number
  y: number
}> = [
  { id: 'discover', x: 70, y: 210 },
  { id: 'assess', x: 250, y: 118 },
  { id: 'engineer', x: 420, y: 214 },
  { id: 'validate', x: 600, y: 132 },
  { id: 'operate', x: 690, y: 230 },
]

type WorkflowVisualProps = {
  motionEnabled: boolean
}

export function WorkflowVisual({ motionEnabled }: WorkflowVisualProps) {
  const [mode, setMode] = useState<WorkflowModeId>('automation')
  const [ready, setReady] = useState(true)
  const svgRef = useRef<SVGSVGElement>(null)
  const packetLayer = useRef<SVGGElement>(null)
  const tabId = useId()
  const config = workflowModes[mode]
  const activeSet = useMemo(() => new Set(config.activePaths), [config])

  useEffect(() => {
    const svg = svgRef.current
    const layer = packetLayer.current
    if (!svg || !layer) {
      setReady(false)
      return
    }

    layer.replaceChildren()
    if (!motionEnabled) {
      return
    }

    const pathNodes = [...svg.querySelectorAll<SVGPathElement>('path[data-conduit="1"]')].filter(
      (path) => activeSet.has(path.dataset.pathId ?? ''),
    )

    if (pathNodes.length === 0) {
      setReady(false)
      return
    }

    const dprCap = Math.min(window.devicePixelRatio || 1, 2)
    const packetCount = Math.max(4, Math.round(7 * (dprCap / 2)))
    const packets = Array.from({ length: packetCount }, (_, index) => {
      const path = pathNodes[index % pathNodes.length]
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      circle.setAttribute('r', index % 3 === 0 ? '3.2' : '2.3')
      circle.setAttribute('fill', index % 2 === 0 ? '#c6f13d' : '#3ee0e6')
      circle.setAttribute('opacity', '0.92')
      layer.appendChild(circle)
      return {
        el: circle,
        path,
        length: path.getTotalLength(),
        offset: Math.random(),
        speed: 0.07 + (index % 5) * 0.018,
      }
    })

    let frame = 0
    let last = performance.now()
    let visible = true
    let pageVisible = document.visibilityState === 'visible'

    const tick = (now: number) => {
      const delta = Math.min(32, now - last)
      last = now
      if (visible && pageVisible) {
        for (const packet of packets) {
          packet.offset = (packet.offset + (packet.speed * delta) / 1000) % 1
          const point = packet.path.getPointAtLength(packet.offset * packet.length)
          packet.el.setAttribute('cx', point.x.toFixed(2))
          packet.el.setAttribute('cy', point.y.toFixed(2))
        }
      }
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
      },
      { threshold: 0.12 },
    )
    observer.observe(svg)

    const onVisibility = () => {
      pageVisible = document.visibilityState === 'visible'
    }
    document.addEventListener('visibilitychange', onVisibility)

    setReady(true)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      layer.replaceChildren()
    }
  }, [activeSet, motionEnabled])

  return (
    <div className={styles.root}>
      <div className={styles.toolbar} role="tablist" aria-label="Engineering workflow modes">
        {MODE_ORDER.map((id) => (
          <button
            key={id}
            type="button"
            role="tab"
            id={`${tabId}-${id}`}
            aria-selected={mode === id}
            className={styles.mode}
            onClick={() => setMode(id)}
          >
            {workflowModes[id].label}
          </button>
        ))}
      </div>
      <div className={styles.frame}>
        <svg
          ref={svgRef}
          className={styles.svg}
          viewBox="0 0 760 340"
          role="img"
          aria-labelledby={`${tabId}-title ${tabId}-desc`}
        >
          <title id={`${tabId}-title`}>Engineering workflow: Discover to Operate</title>
          <desc id={`${tabId}-desc`}>{config.explanation}</desc>
          <text x="18" y="28" fill="#9b968c" fontSize="11" fontFamily="IBM Plex Mono, monospace">
            Discover → Assess → Engineer → Validate → Operate
          </text>
          {Object.entries(PATHS).map(([id, d]) => (
            <path
              key={id}
              d={d}
              fill="none"
              stroke={activeSet.has(id) ? (id.includes('crypto') || id.includes('migrate') ? '#3ee0e6' : '#c6f13d') : 'rgba(243,238,228,0.16)'}
              strokeWidth={activeSet.has(id) ? 2.1 : 1.1}
              strokeLinecap="round"
              data-conduit="1"
              data-path-id={id}
              opacity={activeSet.has(id) ? 0.95 : 0.55}
            />
          ))}
          {NODES.map((node) => (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r="8"
                fill="#070809"
                stroke={activeSet.size ? '#c6f13d' : '#9b968c'}
                strokeWidth="1.4"
              />
              <text
                x={node.x}
                y={node.y - 16}
                textAnchor="middle"
                fill="#f3eee4"
                fontSize="13"
                fontFamily="Syne, sans-serif"
              >
                {node.id[0].toUpperCase() + node.id.slice(1)}
              </text>
            </g>
          ))}
          <g ref={packetLayer} aria-hidden="true" />
        </svg>
      </div>
      <dl className={styles.legend} data-testid="workflow-nodes">
        {NODES.map((node) => (
          <div key={node.id}>
            <dt>{node.id}</dt>
            <dd>{config.nodes[node.id]}</dd>
          </div>
        ))}
      </dl>
      <p className={styles.note} data-testid="workflow-explanation">
        {config.explanation}
      </p>
      <p className={styles.caption}>
        Conceptual engineering workflow{ready ? '' : ' · static fallback'}
        {motionEnabled ? '' : ' · motion reduced'}
      </p>
    </div>
  )
}
