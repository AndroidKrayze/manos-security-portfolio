import { useState } from 'react'
import { profile } from '../content/site'

export function CopyEmailButton() {
  const [status, setStatus] = useState('')

  async function copy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(profile.email)
      } else {
        fallbackCopy(profile.email)
      }
      setStatus('Email copied')
    } catch {
      const ok = fallbackCopy(profile.email)
      setStatus(ok ? 'Email copied' : 'Copy failed — use the email link')
    }
    window.setTimeout(() => setStatus(''), 2200)
  }

  return (
    <div>
      <button type="button" className="btn btn-ghost" onClick={() => void copy()}>
        Copy email
      </button>
      <p aria-live="polite" className="muted" style={{ minHeight: '1.3em', marginTop: '0.45rem' }}>
        {status}
      </p>
    </div>
  )
}

function fallbackCopy(value: string) {
  const field = document.createElement('textarea')
  field.value = value
  field.setAttribute('readonly', '')
  field.style.position = 'fixed'
  field.style.left = '-9999px'
  document.body.appendChild(field)
  field.select()
  const ok = document.execCommand('copy')
  field.remove()
  return ok
}
