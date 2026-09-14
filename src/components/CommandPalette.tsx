import { useEffect, useMemo, useRef, useState } from 'react'
import { paletteCommands } from '../content/site'
import styles from './CommandPalette.module.css'

type CommandPaletteProps = {
  open: boolean
  onClose: () => void
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  const items = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return [...paletteCommands]
    return paletteCommands.filter(
      (item) =>
        item.label.toLowerCase().includes(needle) || item.hint.toLowerCase().includes(needle),
    )
  }, [query])

  useEffect(() => {
    if (!open) {
      setQuery('')
      setActive(0)
      return
    }
    const id = window.setTimeout(() => inputRef.current?.focus(), 0)
    return () => window.clearTimeout(id)
  }, [open])

  useEffect(() => {
    if (active > items.length - 1) setActive(0)
  }, [active, items.length])

  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setActive((value) => (value + 1) % Math.max(items.length, 1))
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault()
        setActive((value) => (value - 1 + Math.max(items.length, 1)) % Math.max(items.length, 1))
      }
      if (event.key === 'Enter') {
        event.preventDefault()
        const item = items[active]
        if (item) runCommand(item.href, onClose)
      }
      if (event.key === 'Tab') {
        const root = dialogRef.current
        if (!root) return
        const focusable = [...root.querySelectorAll<HTMLElement>('input, button')]
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [active, items, onClose, open])

  if (!open) return null

  return (
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="palette-title"
      >
        <h2 id="palette-title" className="sr-only">
          Jump to a section or open a profile link
        </h2>
        <input
          ref={inputRef}
          className={styles.input}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Go to a section or open a link"
          aria-label="Filter navigation commands"
        />
        {items.length === 0 ? (
          <p className={styles.empty}>No matches</p>
        ) : (
          <ul className={styles.list} role="listbox" aria-label="Commands">
            {items.map((item, index) => (
              <li key={item.id} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={index === active}
                  className={index === active ? styles.active : styles.item}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => runCommand(item.href, onClose)}
                >
                  <span>{item.label}</span>
                  <span className={styles.hint}>{item.hint}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function runCommand(href: string, onClose: () => void) {
  onClose()
  if (href.startsWith('#')) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'auto', block: 'start' })
    return
  }
  if (href.startsWith('mailto:')) {
    window.location.href = href
    return
  }
  window.open(href, '_blank', 'noopener,noreferrer')
}
