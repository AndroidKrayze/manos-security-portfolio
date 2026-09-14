import { workCases } from '../content/site'
import {
  AccessDiagram,
  ApiDiagram,
  BigIdDiagram,
  CloudDeployDiagram,
  CyberArkDiagram,
  KubeDiagram,
  Layer7Diagram,
  OwnershipDiagram,
  PipelineDiagram,
  PriorityDiagram,
  TerraformDiagram,
} from './WorkDiagrams'
import styles from './Work.module.css'

const diagrams = {
  ownership: OwnershipDiagram,
  priority: PriorityDiagram,
  api: ApiDiagram,
  access: AccessDiagram,
  pipeline: PipelineDiagram,
  layer7: Layer7Diagram,
  terraform: TerraformDiagram,
  kube: KubeDiagram,
  bigid: BigIdDiagram,
  cyberark: CyberArkDiagram,
  cloud: CloudDeployDiagram,
}

export function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="wrap-wide">
        <div className="section-head">
          <p className="kicker">Selected work</p>
          <h2 id="work-title">Problems, then systems.</h2>
          <p className="muted">
            Public-safe case notes. Each one is a contribution and a delivery stage, not a scorecard.
          </p>
        </div>
        <div className={styles.list}>
          {workCases.map((item) => {
            const Diagram = diagrams[item.diagram]
            return (
              <article key={item.id} className={styles.panel}>
                <div className={styles.copy}>
                  <p className={styles.kicker}>{item.kicker}</p>
                  <h3 className={styles.title}>{item.title}</h3>
                  <div className={styles.meta}>
                    <div>
                      <p className={styles.fieldLabel}>Problem</p>
                      <p>{item.problem}</p>
                    </div>
                    <div>
                      <p className={styles.fieldLabel}>Contribution</p>
                      <p>{item.contribution}</p>
                    </div>
                  </div>
                  <details className={styles.details}>
                    <summary>Delivery stage and value</summary>
                    <p>
                      <strong>Stage. </strong>
                      {item.stage}
                    </p>
                    <p>
                      <strong>Value. </strong>
                      {item.value}
                    </p>
                  </details>
                </div>
                <figure className={styles.diagram}>
                  <Diagram title={`${item.title} diagram`} />
                  <figcaption className={styles.caption}>Original diagram · synthetic labels</figcaption>
                </figure>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
