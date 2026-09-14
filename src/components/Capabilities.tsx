import { capabilities } from '../content/site'
import styles from './Capabilities.module.css'

export function Capabilities() {
  return (
    <section id="capabilities" className="section" aria-labelledby="capabilities-title">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Capabilities</p>
          <h2 id="capabilities-title">How I work the problem.</h2>
        </div>
        <div className={styles.grid}>
          {capabilities.map((group) => (
            <article key={group.id} className={styles.card}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
