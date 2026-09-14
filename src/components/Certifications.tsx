import { certifications, platforms } from '../content/site'
import styles from './Capabilities.module.css'

export function Certifications() {
  return (
    <section id="certifications" className="section" aria-labelledby="certifications-title">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Certifications and platforms</p>
          <h2 id="certifications-title">What I keep current.</h2>
        </div>
        <article className={styles.card}>
          <h3>Certifications and development</h3>
          <ul>
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className={styles.card} style={{ marginTop: '1rem' }}>
          <h3>Platforms and engineering</h3>
          <ul className={styles.inline}>
            {platforms.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
