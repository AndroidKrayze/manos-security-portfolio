import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { profile } from '../content/site'
import { CopyEmailButton } from './CopyEmailButton'

describe('CopyEmailButton', () => {
  it('copies the public email and announces success', async () => {
    const user = userEvent.setup()
    render(<CopyEmailButton />)

    await user.click(screen.getByRole('button', { name: 'Copy email' }))
    expect(await screen.findByText('Email copied')).toBeInTheDocument()
    expect(await navigator.clipboard.readText()).toBe(profile.email)
  })
})
