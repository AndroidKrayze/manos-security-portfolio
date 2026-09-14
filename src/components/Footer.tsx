import { profile } from '../content/site'

export function Footer() {
  return (
    <footer className="section" style={{ paddingTop: 0 }}>
      <div className="wrap" style={{ borderTop: '1px solid var(--line)', paddingTop: '1.4rem' }}>
        <p className="muted">
          {profile.displayName} · {profile.location} · Public-safe portfolio
        </p>
      </div>
    </footer>
  )
}
