type MgMarkProps = {
  size?: number
  title?: string
}

export function MgMark({ size = 36, title = 'MG' }: MgMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label={title}
    >
      <rect x="1.5" y="1.5" width="45" height="45" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M10 34V16.5L18.2 28.2 26.4 16.5V34"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.15"
        strokeLinejoin="miter"
      />
      <path
        d="M30.2 18.2c1.6-1.4 3.6-2.2 5.9-2.2 4.4 0 7.4 3.1 7.4 8.1 0 5.1-3.1 8.3-7.7 8.3-2.2 0-4-.7-5.4-1.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.15"
      />
      <path d="M30.2 26.4H41" fill="none" stroke="currentColor" strokeWidth="2.15" />
    </svg>
  )
}
