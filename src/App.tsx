import { useCallback, useEffect, useRef, useState } from 'react'
import { CommandPalette } from './components/CommandPalette'
import { Capabilities } from './components/Capabilities'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Positioning } from './components/Positioning'
import { Products } from './components/Products'
import { Timeline } from './components/Timeline'
import { Work } from './components/Work'
import { useMotion } from './context/MotionContext'

export default function App() {
  const { motionEnabled } = useMotion()
  const [paletteOpen, setPaletteOpen] = useState(false)
  const lastFocus = useRef<HTMLElement | null>(null)

  const openPalette = useCallback(() => {
    lastFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    setPaletteOpen(true)
  }, [])

  const closePalette = useCallback(() => {
    setPaletteOpen(false)
    window.requestAnimationFrame(() => lastFocus.current?.focus())
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        if (paletteOpen) closePalette()
        else openPalette()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [closePalette, openPalette, paletteOpen])

  useEffect(() => {
    document.documentElement.dataset.motion = motionEnabled ? 'on' : 'off'
  }, [motionEnabled])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header onOpenPalette={openPalette} />
      <main id="main">
        <Hero motionEnabled={motionEnabled} />
        <Positioning />
        <Work />
        <Products />
        <Timeline />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} onClose={closePalette} />
    </>
  )
}
