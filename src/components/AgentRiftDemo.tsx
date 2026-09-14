import { useState } from 'react'
import { agentriftSample } from '../content/site'
import styles from './Products.module.css'

export function AgentRiftDemo() {
  const [stage, setStage] = useState(0)
  const current = agentriftSample.stages[stage]

  return (
    <div className={styles.demo}>
      <p className={styles.label}>{agentriftSample.label}</p>
      <div className={styles.steps} role="tablist" aria-label="Sample AgentRift stages">
        {agentriftSample.stages.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={stage === index}
            className={stage === index ? styles.stepActive : styles.step}
            onClick={() => setStage(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <p className={styles.body} data-testid="rift-stage">
        {current.detail}
      </p>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <caption className="sr-only">Synthetic authorized-assessment findings</caption>
          <thead>
            <tr>
              <th scope="col">Surface</th>
              <th scope="col">Class</th>
              <th scope="col">CVE mapping</th>
              <th scope="col">Stage</th>
            </tr>
          </thead>
          <tbody>
            {agentriftSample.findings.map((row) => (
              <tr key={row.surface}>
                <td>{row.surface}</td>
                <td>{row.class}</td>
                <td>{row.cveClass}</td>
                <td>{row.stage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.path}>{agentriftSample.path.join(' → ')}</p>
    </div>
  )
}
