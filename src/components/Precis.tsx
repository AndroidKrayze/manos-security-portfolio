import { precis } from '../content/site'
import styles from './Work.module.css'

export function Precis() {
  return (
    <section id="precis" className="section" aria-labelledby="precis-title">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">{precis.kicker}</p>
          <h2 id="precis-title">{precis.title}</h2>
          <p className="muted">{precis.intro}</p>
        </div>
        <div className={styles.list}>
          {precis.points.map((point) => (
            <article key={point.title} className={styles.panel} style={{ gridTemplateColumns: '1fr' }}>
              <div>
                <h3 className={styles.title} style={{ fontSize: '1.6rem' }}>
                  {point.title}
                </h3>
                <p className="muted">{point.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
