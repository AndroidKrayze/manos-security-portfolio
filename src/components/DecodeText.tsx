import { useEffect, useState } from 'react'
import styles from './DecodeText.module.css'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

type DecodeTextProps = {
  text: string
  active: boolean
}

export function DecodeText({ text, active }: DecodeTextProps) {
  const [shown, setShown] = useState(text)

  useEffect(() => {
    if (!active) {
      setShown(text)
      return
    }

    const start = performance.now()
    const duration = 480
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      const lock = Math.floor(progress * text.length)
      const next = text
        .split('')
        .map((char, index) => {
          if (char === ' ' || char === '.' || index < lock) return char
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        })
        .join('')
      setShown(progress < 1 ? next : text)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, text])

  return (
    <span className={styles.wrap}>
      <span className="sr-only">{text}</span>
      <span className={styles.ghost} aria-hidden="true">
        {text}
      </span>
      <span className={styles.live} aria-hidden="true">
        {shown}
      </span>
    </span>
  )
}
