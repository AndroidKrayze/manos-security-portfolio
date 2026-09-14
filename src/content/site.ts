export const siteUrl = 'https://androidkrayze.github.io/manos-security-portfolio/'

export const profile = {
  firstName: 'Emmanouil',
  nickname: 'Manos',
  lastName: 'Gkikontis',
  displayName: 'Emmanouil “Manos” Gkikontis',
  shortName: 'Manos Gkikontis',
  location: 'London',
  descriptor: 'Security engineering · Automation · Offensive security',
  headline: 'I find the gaps. Then I build the controls.',
  supporting:
    'I connect offensive security, software engineering and automation so security requirements become systems people can actually run.',
  positioning:
    'I have spent my career on both sides of the problem: finding how systems fail, then writing the software, workflows and platform automation that close those gaps across the SDLC.',
  email: 'androidkrayze@gmail.com',
  github: 'https://github.com/AndroidKrayze',
  linkedin: 'https://www.linkedin.com/in/mgpentest',
}

export const meta = {
  title: 'Emmanouil “Manos” Gkikontis — Security Engineering',
  description:
    'Security engineering portfolio of Emmanouil Gkikontis. Offensive security, automation and software that turn security requirements into practical systems.',
  canonical: siteUrl,
}

export const nav = [
  { id: 'work', href: '#work', label: 'Work' },
  { id: 'products', href: '#products', label: 'Products' },
  { id: 'experience', href: '#experience', label: 'Experience' },
  { id: 'contact', href: '#contact', label: 'Contact' },
] as const

export type WorkflowModeId = 'automation' | 'appsec' | 'crypto'

export const workflowModes: Record<
  WorkflowModeId,
  {
    id: WorkflowModeId
    label: string
    explanation: string
    nodes: Record<'discover' | 'assess' | 'engineer' | 'validate' | 'operate', string>
    activePaths: string[]
  }
> = {
  automation: {
    id: 'automation',
    label: 'Security automation',
    explanation:
      'Signals become tickets, tickets become policy updates, and the same APIs that change configuration also feed monitoring and audit evidence.',
    nodes: {
      discover: 'Collect signals',
      assess: 'Triage owners',
      engineer: 'Automate APIs',
      validate: 'Prove the change',
      operate: 'Watch and iterate',
    },
    activePaths: ['main', 'assess-owner', 'engineer-automate', 'validate-main', 'operate-main'],
  },
  appsec: {
    id: 'appsec',
    label: 'Application security',
    explanation:
      'Findings from assessment and SAST enter an engineering workflow: owners, remediation guidance, and delivery checks before the change is trusted.',
    nodes: {
      discover: 'Map the estate',
      assess: 'Prioritise risk',
      engineer: 'Ship the control',
      validate: 'Test the fix',
      operate: 'Keep the gate',
    },
    activePaths: ['main', 'assess-risk', 'engineer-control', 'validate-main', 'operate-main'],
  },
  crypto: {
    id: 'crypto',
    label: 'Cryptographic readiness',
    explanation:
      'Discovery inventories certificates and protocols. Assessment classifies classical versus hybrid posture. Engineering plans migration; it does not claim a post-quantum deployment.',
    nodes: {
      discover: 'Inventory TLS',
      assess: 'Classify crypto',
      engineer: 'Plan migration',
      validate: 'Check posture',
      operate: 'Track drift',
    },
    activePaths: ['main', 'assess-crypto', 'engineer-migrate', 'validate-main', 'operate-main'],
  },
}

export const workCases = [
  {
    id: 'remediation',
    kicker: 'Northern Trust',
    title: 'Enterprise remediation engineering',
    problem:
      'Sensitive-data findings across an enterprise application estate needed a durable workflow: ownership, SLA tracking and evidence that would survive audit, not another spreadsheet.',
    contribution:
      'I designed the architecture and developed the core workflow logic and BigID API integration for a sensitive-data remediation platform. That included ownership and SLA tracking, audit evidence, Security Authority documentation, and infrastructure and cloud deployment planning.',
    stage: 'Development towards production readiness. UI and deployment work were still outstanding when I left.',
    value:
      'Gives engineering and security a shared system for remediating findings with evidence attached — without claiming a completed production rollout.',
    diagram: 'ownership',
  },
  {
    id: 'vuln-intel',
    kicker: 'Northern Trust',
    title: 'Vulnerability intelligence',
    problem:
      'Vulnerability data reached teams too late and without enough engineering context, so prioritisation stayed in risk conversations instead of delivery work.',
    contribution:
      'I designed and developed a ServiceNow-connected dashboard with automated remediation guidance, and worked with engineering, vulnerability management and risk teams to pull engineers in earlier.',
    stage: 'The dashboard entered testing. It is not described here as a production service.',
    value:
      'Intended to make prioritisation visible and actionable for the people who have to change the software.',
    diagram: 'priority',
  },
  {
    id: 'imperva-automation',
    kicker: 'RSM UK · consulting engagement',
    title: 'Security platform automation',
    problem:
      'Policy and configuration changes on a security platform were still largely manual, which slowed updates and made operational, security and audit data harder to reuse.',
    contribution:
      'I used Imperva APIs to automate policy and configuration updates, retrieve operational, security and audit information, integrate monitoring and alerting with external systems, and evaluate the existing setup.',
    stage: 'Consulting engagement. Scope is API automation and integration — not ownership of a WAF estate or adjacent vendor programmes.',
    value:
      'Turns platform administration into repeatable engineering: the same interfaces that change policy can also feed evidence and alerts.',
    diagram: 'api',
  },
  {
    id: 'continuity',
    kicker: 'Northern Trust',
    title: 'Network access and engineering continuity',
    problem:
      'Discovery scanners needed controlled reach to selected internal databases, while a Layer 7 migration and Database Access Monitoring workstreams required an EMEA engineering point of contact.',
    contribution:
      'I used Illumio with BigID so scanners could reach selected internal databases for discovery. I was the primary EMEA engineering resource on a Layer 7 migration, coordinating deployments and troubleshooting with US teams and vendors. I also supported major Database Access Monitoring workstreams and mentored colleagues for continuity.',
    stage: 'Operational engineering support across concurrent workstreams.',
    value:
      'Keeps discovery and migration work moving when the people, vendors and time zones do not sit in one room.',
    diagram: 'access',
  },
  {
    id: 'secure-delivery',
    kicker: 'RSM UK',
    title: 'Secure delivery',
    problem:
      'Assessment findings were outrunning the engineering practices that should have prevented the same classes of issue in delivery.',
    contribution:
      'I built a PowerShell audit framework and established Secure SDLC and SAST capabilities using Semgrep, SonarQube, Gitleaks, Trivy and DefectDojo, connecting assessment findings with improvements to engineering and delivery.',
    stage: 'Capability build for consulting delivery. Not a claim that every tool ran in every client estate.',
    value:
      'Puts findings back into the pipeline: detect earlier, track them in one place, and give engineers a path to close them.',
    diagram: 'pipeline',
  },
] as const

export const products = {
  nexxsecure: {
    name: 'NexxSecure',
    status: 'In production',
    role: 'Creator',
    href: 'https://www.nexxsecure.co.uk/',
    hrefLabel: 'Visit NexxSecure',
    lede: 'A compliance readiness platform that connects framework requirements with structured assessments, evidence and remediation workflows.',
    note: 'Sample data below is an interactive illustration, not a live client assessment. NexxSecure does not certify compliance or speak for a standards body.',
  },
  postqure: {
    name: 'PostQure',
    status: 'In production',
    role: 'Creator',
    href: 'https://postqure.com',
    hrefLabel: 'Visit PostQure',
    lede: 'A post-quantum cryptography readiness product: TLS discovery, certificate inventory, cryptographic classification and a path into migration planning.',
    note: 'Readiness is not a completed post-quantum deployment, and this illustration does not claim a cryptographic break. Inventory data is synthetic.',
  },
} as const

export const nexxSample = {
  label: 'Interactive illustration',
  framework: 'NIST CSF 2.0 — sample',
  requirement: {
    id: 'PR.DS-01',
    title: 'Data-at-rest is protected',
    summary:
      'Confirm that sensitive data stores in the sample estate use approved encryption and that ownership of exceptions is recorded.',
  },
  stages: [
    {
      id: 'assess',
      title: 'Assessment',
      detail: 'Control rated partially satisfied. Two stores in the sample set lack recorded encryption evidence.',
    },
    {
      id: 'evidence',
      title: 'Evidence',
      detail: 'Uploaded: sample key-management standard (draft). Missing: store-level configuration export.',
    },
    {
      id: 'remediate',
      title: 'Remediation',
      detail: 'Owner: platform engineering. Action: attach configuration evidence or raise an exception with an expiry.',
    },
  ],
} as const

export const postqureSample = {
  label: 'Sample workflow',
  path: ['Discover TLS', 'Inventory certificates', 'Classify cryptography', 'Plan migration'],
  certificates: [
    {
      host: 'api.example-corp.invalid',
      algorithm: 'RSA-2048',
      protocol: 'TLS 1.2',
      posture: 'Classical',
      expires: '2027-03-12',
    },
    {
      host: 'login.example-corp.invalid',
      algorithm: 'ECDSA P-256',
      protocol: 'TLS 1.3',
      posture: 'Hybrid-ready',
      expires: '2026-11-02',
    },
    {
      host: 'mail.example-corp.invalid',
      algorithm: 'RSA-2048',
      protocol: 'TLS 1.2',
      posture: 'Classical',
      expires: '2026-12-18',
    },
    {
      host: 'vault.example-corp.invalid',
      algorithm: 'ECDSA P-384',
      protocol: 'TLS 1.3',
      posture: 'Review',
      expires: '2027-06-01',
    },
    {
      host: 'cdn.example-corp.invalid',
      algorithm: 'RSA-2048',
      protocol: 'TLS 1.3',
      posture: 'Classical',
      expires: '2027-01-20',
    },
  ],
} as const

export const timeline = [
  {
    period: 'Dec 2025 — Jul 2026',
    org: 'Northern Trust',
    title: 'Senior Lead, Cyber Security Engineering — EMEA',
    emphasis: 'Banking',
    summary:
      'Security engineering across remediation platforms, vulnerability intelligence, controlled discovery access and delivery continuity.',
  },
  {
    period: 'Apr 2025 — Dec 2025',
    org: 'RSM UK',
    title: 'Principal Cyber Security Consultant',
    emphasis: 'Consulting',
    summary:
      'Platform API automation, secure delivery tooling, and assessment work that had to become engineering practice.',
  },
  {
    period: 'Earlier',
    org: 'Mind The Hack AI · Blyce / BearingPoint Caribbean · Endeavour · Push Doctor',
    title: 'Security, consulting and software development',
    emphasis: 'Software',
    summary:
      'A path through offensive security, consultancy delivery and product engineering — the combination this site is built on.',
  },
] as const

export const capabilities = [
  {
    id: 'engineering',
    title: 'Security engineering',
    items: [
      'Control design from assessment findings',
      'Sensitive-data and vulnerability workflows',
      'Architecture and integration against existing platforms',
      'Evidence, ownership and SLA-shaped delivery',
    ],
  },
  {
    id: 'automation',
    title: 'Automation',
    items: [
      'Security platform APIs and configuration as code',
      'Monitoring and alerting integrations',
      'Workflow logic between discovery, ticketing and owners',
      'Operational and audit data retrieval',
    ],
  },
  {
    id: 'delivery',
    title: 'Secure delivery',
    items: [
      'Secure SDLC and SAST capability build',
      'Semgrep, SonarQube, Gitleaks, Trivy, DefectDojo',
      'PowerShell audit frameworks',
      'Connecting consultancy findings to engineering practice',
    ],
  },
  {
    id: 'crypto',
    title: 'Emerging cryptographic risks',
    items: [
      'TLS discovery and certificate inventory thinking',
      'Classical versus hybrid posture classification',
      'Migration planning without over-claiming deployment',
      'Product design for cryptographic readiness (PostQure)',
    ],
  },
] as const

export const paletteCommands = [
  { id: 'nav-work', label: 'Selected work', hint: 'Section', href: '#work', kind: 'section' },
  { id: 'nav-products', label: 'Products', hint: 'Section', href: '#products', kind: 'section' },
  { id: 'nav-experience', label: 'Experience', hint: 'Section', href: '#experience', kind: 'section' },
  { id: 'nav-capabilities', label: 'Capabilities', hint: 'Section', href: '#capabilities', kind: 'section' },
  { id: 'nav-contact', label: 'Contact', hint: 'Section', href: '#contact', kind: 'section' },
  { id: 'link-email', label: 'Email Manos', hint: 'androidkrayze@gmail.com', href: 'mailto:androidkrayze@gmail.com', kind: 'link' },
  { id: 'link-github', label: 'GitHub', hint: 'AndroidKrayze', href: 'https://github.com/AndroidKrayze', kind: 'link' },
  { id: 'link-linkedin', label: 'LinkedIn', hint: 'mgpentest', href: 'https://www.linkedin.com/in/mgpentest', kind: 'link' },
] as const
