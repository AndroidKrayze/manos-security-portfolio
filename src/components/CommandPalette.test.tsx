import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRef, useState } from 'react'
import { CommandPalette } from './CommandPalette'

function Harness() {
  const [open, setOpen] = useState(false)
  const lastFocus = useRef<HTMLElement | null>(null)
  return (
    <div>
      <button
        type="button"
        onClick={(event) => {
          lastFocus.current = event.currentTarget
          setOpen(true)
        }}
      >
        Open command palette
      </button>
      <CommandPalette
        open={open}
        onClose={() => {
          setOpen(false)
          window.requestAnimationFrame(() => lastFocus.current?.focus())
        }}
      />
    </div>
  )
}

describe('CommandPalette', () => {
  it('opens, lists navigation commands, and restores focus on close', async () => {
    const user = userEvent.setup()
    render(<Harness />)

    const trigger = screen.getByRole('button', { name: 'Open command palette' })
    await user.click(trigger)

    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /Selected work/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Filter navigation commands')).toHaveFocus()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    await waitFor(() => expect(trigger).toHaveFocus())
  })
})
