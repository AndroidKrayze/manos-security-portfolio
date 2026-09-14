import { useMemo, useState } from 'react'
import { postqureSample } from '../content/site'
import styles from './Products.module.css'

const FILTERS = ['All', 'Classical', 'Hybrid-ready', 'Review'] as const

export function PostQureDemo() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')
  const rows = useMemo(
    () =>
      postqureSample.certificates.filter((row) => filter === 'All' || row.posture === filter),
    [filter],
  )

  return (
    <div className={styles.demo}>
      <p className={styles.label}>{postqureSample.label}</p>
      <div className={styles.filters} role="group" aria-label="Filter certificate posture">
        {FILTERS.map((item) => (
          <button
            key={item}
            type="button"
            className={filter === item ? styles.stepActive : styles.step}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <caption className="sr-only">Synthetic certificate inventory</caption>
          <thead>
            <tr>
              <th scope="col">Host</th>
              <th scope="col">Algorithm</th>
              <th scope="col">Protocol</th>
              <th scope="col">Posture</th>
              <th scope="col">Expires</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.host}>
                <td>{row.host}</td>
                <td>{row.algorithm}</td>
                <td>{row.protocol}</td>
                <td>{row.posture}</td>
                <td>{row.expires}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.path}>{postqureSample.path.join(' → ')}</p>
    </div>
  )
}
