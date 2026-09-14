type DiagramProps = { title: string }

export function OwnershipDiagram({ title }: DiagramProps) {
  return (
    <svg viewBox="0 0 360 200" role="img" aria-label={title}>
      <text x="16" y="22" fill="#9b968c" fontSize="11" fontFamily="IBM Plex Mono, monospace">
        SAMPLE WORKFLOW
      </text>
      <rect x="16" y="42" width="90" height="44" fill="none" stroke="#c6f13d" />
      <text x="26" y="68" fill="#f3eee4" fontSize="12">Finding</text>
      <path d="M106 64 H146" stroke="#3ee0e6" />
      <rect x="146" y="42" width="90" height="44" fill="none" stroke="#3ee0e6" />
      <text x="158" y="68" fill="#f3eee4" fontSize="12">Owner</text>
      <path d="M236 64 H276" stroke="#c6f13d" />
      <rect x="276" y="42" width="68" height="44" fill="none" stroke="#c6f13d" />
      <text x="286" y="68" fill="#f3eee4" fontSize="12">SLA</text>
      <rect x="16" y="118" width="328" height="58" fill="none" stroke="rgba(243,238,228,0.2)" />
      <text x="28" y="152" fill="#9b968c" fontSize="12">Evidence pack · Security Authority note</text>
    </svg>
  )
}

export function PriorityDiagram({ title }: DiagramProps) {
  return (
    <svg viewBox="0 0 360 200" role="img" aria-label={title}>
      <text x="16" y="22" fill="#9b968c" fontSize="11" fontFamily="IBM Plex Mono, monospace">
        SAMPLE PRIORITY
      </text>
      {[
        { y: 48, w: 260, label: 'Act now · exploitable + exposed' },
        { y: 92, w: 190, label: 'Schedule · owned, patch ready' },
        { y: 136, w: 120, label: 'Watch · low reachability' },
      ].map((row) => (
        <g key={row.label}>
          <rect x="16" y={row.y} width={row.w} height="28" fill="rgba(198,241,61,0.12)" stroke="#c6f13d" />
          <text x="26" y={row.y + 19} fill="#f3eee4" fontSize="12">
            {row.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

export function ApiDiagram({ title }: DiagramProps) {
  return (
    <svg viewBox="0 0 360 200" role="img" aria-label={title}>
      <text x="16" y="22" fill="#9b968c" fontSize="11" fontFamily="IBM Plex Mono, monospace">
        SAMPLE API FLOW
      </text>
      <rect x="20" y="50" width="100" height="100" fill="none" stroke="#c6f13d" />
      <text x="36" y="104" fill="#f3eee4" fontSize="13">Playbook</text>
      <path d="M120 100 H160" stroke="#3ee0e6" />
      <rect x="160" y="62" width="80" height="76" fill="none" stroke="#3ee0e6" />
      <text x="176" y="106" fill="#f3eee4" fontSize="13">API</text>
      <path d="M240 80 H280" stroke="#c6f13d" />
      <path d="M240 120 H280" stroke="#3ee0e6" />
      <rect x="280" y="58" width="60" height="36" fill="none" stroke="#c6f13d" />
      <text x="288" y="80" fill="#f3eee4" fontSize="11">Policy</text>
      <rect x="280" y="108" width="60" height="36" fill="none" stroke="#3ee0e6" />
      <text x="290" y="130" fill="#f3eee4" fontSize="11">Alert</text>
    </svg>
  )
}

export function AccessDiagram({ title }: DiagramProps) {
  return (
    <svg viewBox="0 0 360 200" role="img" aria-label={title}>
      <text x="16" y="22" fill="#9b968c" fontSize="11" fontFamily="IBM Plex Mono, monospace">
        CONCEPTUAL ACCESS
      </text>
      <circle cx="70" cy="110" r="36" fill="none" stroke="#c6f13d" />
      <text x="48" y="114" fill="#f3eee4" fontSize="12">Scanner</text>
      <path d="M106 110 C150 110 150 70 200 70" fill="none" stroke="#3ee0e6" />
      <path d="M106 110 C150 110 150 150 200 150" fill="none" stroke="rgba(243,238,228,0.25)" />
      <rect x="200" y="50" width="130" height="40" fill="none" stroke="#3ee0e6" />
      <text x="214" y="75" fill="#f3eee4" fontSize="12">Selected store</text>
      <rect x="200" y="130" width="130" height="40" fill="none" stroke="rgba(243,238,228,0.25)" />
      <text x="222" y="155" fill="#9b968c" fontSize="12">Out of scope</text>
    </svg>
  )
}

export function Layer7Diagram({ title }: DiagramProps) {
  return (
    <svg viewBox="0 0 360 200" role="img" aria-label={title}>
      <text x="16" y="22" fill="#9b968c" fontSize="11" fontFamily="IBM Plex Mono, monospace">
        CONCEPTUAL L7 PATH
      </text>
      <rect x="16" y="50" width="70" height="100" fill="none" stroke="#c6f13d" />
      <text x="28" y="104" fill="#f3eee4" fontSize="12">Edge</text>
      <path d="M86 100 H120" stroke="#3ee0e6" />
      <rect x="120" y="50" width="100" height="100" fill="none" stroke="#c6f13d" />
      <text x="132" y="90" fill="#f3eee4" fontSize="12">L7 balancer</text>
      <text x="138" y="112" fill="#9b968c" fontSize="11">Anti-DDoS</text>
      <path d="M220 100 H256" stroke="#3ee0e6" />
      <rect x="256" y="62" width="88" height="76" fill="none" stroke="#3ee0e6" />
      <text x="270" y="106" fill="#f3eee4" fontSize="12">App pool</text>
    </svg>
  )
}

export function TerraformDiagram({ title }: DiagramProps) {
  return (
    <svg viewBox="0 0 360 200" role="img" aria-label={title}>
      <text x="16" y="22" fill="#9b968c" fontSize="11" fontFamily="IBM Plex Mono, monospace">
        SAMPLE IaC FLOW
      </text>
      {['HCL', 'Plan', 'Apply', 'State'].map((label, index) => (
        <g key={label} transform={`translate(${20 + index * 84} 70)`}>
          <rect width="72" height="60" fill="none" stroke={index % 2 === 0 ? '#c6f13d' : '#3ee0e6'} />
          <text x="16" y="36" fill="#f3eee4" fontSize="12">
            {label}
          </text>
        </g>
      ))}
    </svg>
  )
}

export function KubeDiagram({ title }: DiagramProps) {
  return (
    <svg viewBox="0 0 360 200" role="img" aria-label={title}>
      <text x="16" y="22" fill="#9b968c" fontSize="11" fontFamily="IBM Plex Mono, monospace">
        SAMPLE IMAGE UPGRADE
      </text>
      <rect x="16" y="56" width="100" height="88" fill="none" stroke="#c6f13d" />
      <text x="36" y="106" fill="#f3eee4" fontSize="12">kubectl</text>
      <path d="M116 100 H156" stroke="#3ee0e6" />
      <rect x="156" y="56" width="80" height="88" fill="none" stroke="#3ee0e6" />
      <text x="168" y="106" fill="#f3eee4" fontSize="12">Image</text>
      <path d="M236 100 H276" stroke="#c6f13d" />
      <rect x="276" y="56" width="68" height="88" fill="none" stroke="#c6f13d" />
      <text x="286" y="106" fill="#f3eee4" fontSize="12">Roll</text>
    </svg>
  )
}

export function BigIdDiagram({ title }: DiagramProps) {
  return (
    <svg viewBox="0 0 360 200" role="img" aria-label={title}>
      <text x="16" y="22" fill="#9b968c" fontSize="11" fontFamily="IBM Plex Mono, monospace">
        SAMPLE PI / PII FLOW
      </text>
      <rect x="16" y="50" width="90" height="100" fill="none" stroke="#c6f13d" />
      <text x="36" y="104" fill="#f3eee4" fontSize="12">BigID</text>
      <path d="M106 100 H146" stroke="#3ee0e6" />
      <rect x="146" y="50" width="80" height="100" fill="none" stroke="#3ee0e6" />
      <text x="162" y="104" fill="#f3eee4" fontSize="12">API</text>
      <path d="M226 100 H266" stroke="#c6f13d" />
      <rect x="266" y="50" width="78" height="100" fill="none" stroke="#c6f13d" />
      <text x="276" y="96" fill="#f3eee4" fontSize="12">Portal</text>
      <text x="276" y="116" fill="#9b968c" fontSize="11">PI / PII</text>
    </svg>
  )
}

export function CyberArkDiagram({ title }: DiagramProps) {
  return (
    <svg viewBox="0 0 360 200" role="img" aria-label={title}>
      <text x="16" y="22" fill="#9b968c" fontSize="11" fontFamily="IBM Plex Mono, monospace">
        CONCEPTUAL PAM PATH
      </text>
      <rect x="16" y="70" width="100" height="60" fill="none" stroke="#c6f13d" />
      <text x="36" y="106" fill="#f3eee4" fontSize="12">Engineer</text>
      <path d="M116 100 H160" stroke="#3ee0e6" />
      <rect x="160" y="70" width="80" height="60" fill="none" stroke="#3ee0e6" />
      <text x="170" y="106" fill="#f3eee4" fontSize="12">Vault</text>
      <path d="M240 100 H280" stroke="#c6f13d" />
      <rect x="280" y="70" width="64" height="60" fill="none" stroke="#c6f13d" />
      <text x="290" y="106" fill="#f3eee4" fontSize="12">Target</text>
    </svg>
  )
}

export function CloudDeployDiagram({ title }: DiagramProps) {
  return (
    <svg viewBox="0 0 360 200" role="img" aria-label={title}>
      <text x="16" y="22" fill="#9b968c" fontSize="11" fontFamily="IBM Plex Mono, monospace">
        SAMPLE CLOUD LANDING
      </text>
      <rect x="16" y="56" width="150" height="100" fill="none" stroke="#c6f13d" />
      <text x="62" y="110" fill="#f3eee4" fontSize="14">Azure</text>
      <rect x="194" y="56" width="150" height="100" fill="none" stroke="#3ee0e6" />
      <text x="246" y="110" fill="#f3eee4" fontSize="14">AWS</text>
    </svg>
  )
}

export function PipelineDiagram({ title }: DiagramProps) {
  return (
    <svg viewBox="0 0 360 200" role="img" aria-label={title}>
      <text x="16" y="22" fill="#9b968c" fontSize="11" fontFamily="IBM Plex Mono, monospace">
        SAMPLE DELIVERY GATE
      </text>
      {['SAST', 'Secrets', 'Deps', 'Track'].map((label, index) => (
        <g key={label} transform={`translate(${20 + index * 84} 70)`}>
          <rect width="72" height="60" fill="none" stroke={index === 3 ? '#3ee0e6' : '#c6f13d'} />
          <text x="12" y="36" fill="#f3eee4" fontSize="12">
            {label}
          </text>
        </g>
      ))}
    </svg>
  )
}
