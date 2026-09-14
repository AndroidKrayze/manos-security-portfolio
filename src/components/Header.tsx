import { useState } from 'react'
import { nav, profile } from '../content/site'
import { useMotion } from '../context/MotionContext'
import { MgMark } from './MgMark'
import styles from './Header.module.css'

type HeaderProps = {
  onOpenPalette: () => void
}

export function Header({ onOpenPalette }: HeaderProps) {
  const { motionEnabled, toggleMotion } = useMotion()
  const [open, setOpen] = useState(false)

  return (
    <header id="top" className={`${styles.header} ${open ? styles.open : ''}`}>
      <div className={`wrap-wide ${styles.bar}`}>
        <a className={styles.brand} href="#top" onClick={() => setOpen(false)}>
          <MgMark size={34} title="MG monogram" />
          <span className={styles.brandText}>
            <span className={styles.brandName}>{profile.shortName}</span>
            <span className={styles.brandMeta}>{profile.location}</span>
          </span>
        </a>
        <nav id="mobile-nav" className={styles.nav} aria-label="Primary">
          {nav.map((item) => (
            <a key={item.id} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className={styles.menuOnly} href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className={styles.menuOnly} href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>
        <div className={styles.tools}>
          <a
            className={`icon-btn ${styles.wideOnly}`}
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            className={`icon-btn ${styles.wideOnly}`}
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <button
            type="button"
            className="icon-btn"
            aria-pressed={!motionEnabled}
            aria-label={motionEnabled ? 'Disable motion' : 'Enable motion'}
            onClick={toggleMotion}
          >
            {motionEnabled ? 'Motion' : 'Still'}
          </button>
          <button type="button" className="icon-btn" onClick={onOpenPalette} aria-label="Open command palette">
            Ctrl+K
          </button>
          <button
            type="button"
            className={`icon-btn ${styles.navToggle}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}
