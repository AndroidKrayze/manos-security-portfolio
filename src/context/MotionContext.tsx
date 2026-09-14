import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

const STORAGE_KEY = 'mg-motion'

function readInitialEnabled(): boolean {
  if (typeof window === 'undefined') return true
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'off') return false
    if (stored === 'on') return true
  } catch {
    /* private mode */
  }
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

type MotionContextValue = {
  motionEnabled: boolean
  toggleMotion: () => void
}

const MotionContext = createContext<MotionContextValue | null>(null)

export function MotionProvider({ children }: { children: ReactNode }) {
  const [motionEnabled, setMotionEnabled] = useState(readInitialEnabled)

  const toggleMotion = useCallback(() => {
    setMotionEnabled((current) => {
      const next = !current
      try {
        window.localStorage.setItem(STORAGE_KEY, next ? 'on' : 'off')
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  const value = useMemo(
    () => ({ motionEnabled, toggleMotion }),
    [motionEnabled, toggleMotion],
  )

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
}

export function useMotion() {
  const ctx = useContext(MotionContext)
  if (!ctx) {
    throw new Error('useMotion must be used within MotionProvider')
  }
  return ctx
}
