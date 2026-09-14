import { useState } from 'react'
import { nexxSample } from '../content/site'
import styles from './Products.module.css'

export function NexxSecureDemo() {
  const [stage, setStage] = useState(0)
  const current = nexxSample.stages[stage]

  return (
    <div className={styles.demo}>
      <p className={styles.label}>{nexxSample.label}</p>
      <p className="muted">{nexxSample.framework}</p>
      <div className={styles.req}>
        <p className={styles.reqId}>{nexxSample.requirement.id}</p>
        <strong>{nexxSample.requirement.title}</strong>
        <p className={styles.body}>{nexxSample.requirement.summary}</p>
      </div>
      <div className={styles.steps} role="tablist" aria-label="Sample requirement stages">
        {nexxSample.stages.map((item, index) => (
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
      <p className={styles.body} data-testid="nexx-stage">
        {current.detail}
      </p>
    </div>
  )
}
