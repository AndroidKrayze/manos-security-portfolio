import { profile } from '../content/site'

export function Positioning() {
  return (
    <section className="section" aria-labelledby="position-title">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Positioning</p>
          <h2 id="position-title">Offence, engineering, automation.</h2>
          <p className="muted">{profile.positioning}</p>
        </div>
      </div>
    </section>
  )
}
