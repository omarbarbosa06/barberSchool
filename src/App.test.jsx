import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('DeLeon Academy website', () => {
  it('renders the core content and all program options', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /don’t just learn/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /class a barber program/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /cosmetology program/i })).toBeInTheDocument()
    expect(screen.getByText('$10,495')).toBeInTheDocument()
  })

  it('opens, validates, and completes the tour request flow', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getAllByRole('button', { name: /schedule a tour/i })[0])
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.type(screen.getByLabelText(/full name/i), 'Jordan Lee')
    await user.type(screen.getByLabelText(/phone number/i), '5125550100')
    await user.selectOptions(screen.getByLabelText(/program of interest/i), 'Class A Barber')
    await user.click(screen.getByRole('button', { name: /request my tour/i }))
    expect(await screen.findByRole('heading', { name: /we’ll be in touch/i })).toBeInTheDocument()
  })

  it('exposes an accessible mobile menu control', async () => {
    const user = userEvent.setup()
    render(<App />)
    const menu = screen.getByRole('button', { name: /open menu/i })
    expect(menu).toHaveAttribute('aria-expanded', 'false')
    await user.click(menu)
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute('aria-expanded', 'true')
  })
})
