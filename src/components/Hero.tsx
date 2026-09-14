import { profile } from '../content/site'
import { DecodeText } from './DecodeText'
import { WorkflowVisual } from './WorkflowVisual'
import styles from './Hero.module.css'

type HeroProps = {
  motionEnabled: boolean
}

export function Hero({ motionEnabled }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`wrap-wide ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`${styles.name} enter-1`}>{profile.displayName}</p>
          <p className={`${styles.descriptor} enter-1`}>{profile.descriptor}</p>
          <h1 id="hero-title" className={`${styles.headline} enter-2`}>
            <DecodeText text={profile.headline} active={motionEnabled} />
          </h1>
          <p className={`${styles.supporting} enter-3`}>{profile.supporting}</p>
          <div className={`${styles.actions} enter-3`}>
            <a className="btn btn-primary" href="#work">
              Explore my work
            </a>
            <a className="btn btn-ghost" href="#precis">
              Covering precis
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <div className={`${styles.visual} enter-4`}>
          <WorkflowVisual motionEnabled={motionEnabled} />
        </div>
      </div>
    </section>
  )
}
