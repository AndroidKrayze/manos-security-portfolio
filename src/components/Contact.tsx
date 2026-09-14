import { profile } from '../content/site'
import { CopyEmailButton } from './CopyEmailButton'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Contact</p>
          <h2 id="contact-title">Have a security problem worth engineering?</h2>
        </div>
        <div className={styles.block}>
          <p className="muted">
            London-based. Direct email, no forms, no pretend success states.
          </p>
          <a className={styles.email} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className={styles.actions}>
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <CopyEmailButton />
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
