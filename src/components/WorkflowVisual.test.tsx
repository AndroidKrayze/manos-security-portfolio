import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { workflowModes } from '../content/site'
import { WorkflowVisual } from './WorkflowVisual'

describe('WorkflowVisual', () => {
  it('changes node labels and explanation when a mode is selected', async () => {
    const user = userEvent.setup()
    render(<WorkflowVisual motionEnabled={false} />)

    expect(screen.getByTestId('workflow-explanation')).toHaveTextContent(
      workflowModes.automation.explanation,
    )
    expect(screen.getByTestId('workflow-nodes')).toHaveTextContent(
      workflowModes.automation.nodes.engineer,
    )

    await user.click(screen.getByRole('tab', { name: workflowModes.appsec.label }))

    expect(screen.getByTestId('workflow-explanation')).toHaveTextContent(
      workflowModes.appsec.explanation,
    )
    expect(screen.getByTestId('workflow-nodes')).toHaveTextContent(
      workflowModes.appsec.nodes.engineer,
    )
    expect(screen.getByTestId('workflow-nodes')).not.toHaveTextContent(
      workflowModes.automation.nodes.engineer,
    )

    await user.click(screen.getByRole('tab', { name: workflowModes.crypto.label }))
    expect(screen.getByTestId('workflow-explanation')).toHaveTextContent(
      workflowModes.crypto.explanation,
    )
    expect(screen.getByTestId('workflow-nodes')).toHaveTextContent(
      workflowModes.crypto.nodes.discover,
    )
  })

  it('is operable with the keyboard', async () => {
    const user = userEvent.setup()
    render(<WorkflowVisual motionEnabled={false} />)
    const crypto = screen.getByRole('tab', { name: workflowModes.crypto.label })
    crypto.focus()
    await user.keyboard('{Enter}')
    expect(crypto).toHaveAttribute('aria-selected', 'true')
  })
})
