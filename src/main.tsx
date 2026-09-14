import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/syne/700.css'
import '@fontsource/syne/800.css'
import '@fontsource/source-sans-3/400.css'
import '@fontsource/source-sans-3/600.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import './styles/global.css'
import App from './App'
import { MotionProvider } from './context/MotionContext'

const root = document.getElementById('root')
if (!root) {
  throw new Error('Root element missing')
}

document.documentElement.dataset.motion = window.matchMedia('(prefers-reduced-motion: reduce)')
  .matches
  ? 'off'
  : 'on'

try {
  const stored = window.localStorage.getItem('mg-motion')
  if (stored === 'off' || stored === 'on') {
    document.documentElement.dataset.motion = stored
  }
} catch {
  /* ignore */
}

createRoot(root).render(
  <StrictMode>
    <MotionProvider>
      <App />
    </MotionProvider>
  </StrictMode>,
)
