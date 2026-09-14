import { timeline } from '../content/site'
import styles from './Timeline.module.css'

export function Timeline() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Experience</p>
          <h2 id="experience-title">Banking, consulting, software.</h2>
        </div>
        <ol className={styles.list}>
          {timeline.map((item) => (
            <li key={`${item.period}-${item.org}`} className={styles.item}>
              <div>
                <p className={styles.period}>{item.period}</p>
                <span className={styles.emphasis}>{item.emphasis}</span>
              </div>
              <div>
                <h3 className={styles.org}>{item.org}</h3>
                <p className={styles.title}>{item.title}</p>
                <p className="muted">{item.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
