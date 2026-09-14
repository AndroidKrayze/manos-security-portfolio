import { lazy, Suspense } from 'react'
import { products, profile } from '../content/site'
import styles from './Products.module.css'

const NexxSecureDemo = lazy(() =>
  import('./NexxSecureDemo').then((mod) => ({ default: mod.NexxSecureDemo })),
)
const PostQureDemo = lazy(() =>
  import('./PostQureDemo').then((mod) => ({ default: mod.PostQureDemo })),
)
const AgentRiftDemo = lazy(() =>
  import('./AgentRiftDemo').then((mod) => ({ default: mod.AgentRiftDemo })),
)

export function Products() {
  return (
    <section id="products" className="section" aria-labelledby="products-title">
      <div className="wrap-wide">
        <div className="section-head">
          <p className="kicker">Products</p>
          <h2 id="products-title">Things I am building.</h2>
          <p className="muted">
            I am the creator of all three. NexxSecure and PostQure are in production. AgentRift is in
            UAT. The illustrations on this page are local sample workflows, not live customer data.
          </p>
        </div>
        <div className={styles.stack}>
          <article className={`${styles.panel} ${styles.nexx}`}>
            <div>
              <p className={styles.status}>
                {products.nexxsecure.role} · {products.nexxsecure.status}
              </p>
              <h3 className={styles.title}>{products.nexxsecure.name}</h3>
              <p className={styles.lede}>{products.nexxsecure.lede}</p>
              <p className={styles.note}>{products.nexxsecure.note}</p>
              <div className={styles.actions}>
                <a className="btn btn-primary" href={products.nexxsecure.href} target="_blank" rel="noreferrer">
                  {products.nexxsecure.hrefLabel}
                </a>
              </div>
            </div>
            <Suspense fallback={<p className="muted">Loading illustration…</p>}>
              <NexxSecureDemo />
            </Suspense>
          </article>
          <article className={`${styles.panel} ${styles.postq}`}>
            <div>
              <p className={styles.status}>
                {products.postqure.role} · {products.postqure.status}
              </p>
              <h3 className={styles.title}>{products.postqure.name}</h3>
              <p className={styles.lede}>{products.postqure.lede}</p>
              <p className={styles.note}>{products.postqure.note}</p>
              <div className={styles.actions}>
                <a className="btn btn-ghost" href={products.postqure.href} target="_blank" rel="noreferrer">
                  {products.postqure.hrefLabel}
                </a>
              </div>
            </div>
            <Suspense fallback={<p className="muted">Loading illustration…</p>}>
              <PostQureDemo />
            </Suspense>
          </article>
          <article className={`${styles.panel} ${styles.rift}`}>
            <div>
              <p className={styles.status}>
                {products.agentrift.role} · {products.agentrift.status}
              </p>
              <h3 className={styles.title}>{products.agentrift.name}</h3>
              <p className={styles.lede}>{products.agentrift.lede}</p>
              <p className={styles.note}>{products.agentrift.note}</p>
              <div className={styles.actions}>
                <a
                  className="btn btn-ghost"
                  href={`mailto:${profile.email}?subject=${encodeURIComponent('Discuss AgentRift')}`}
                >
                  {products.agentrift.hrefLabel}
                </a>
              </div>
            </div>
            <Suspense fallback={<p className="muted">Loading illustration…</p>}>
              <AgentRiftDemo />
            </Suspense>
          </article>
        </div>
      </div>
    </section>
  )
}
