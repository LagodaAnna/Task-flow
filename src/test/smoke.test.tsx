import { render, screen } from '@testing-library/react'

describe('testing setup', () => {
  it('renders and queries the DOM with jest-dom matchers', () => {
    render(<button>Click me</button>)
    expect(
      screen.getByRole('button', { name: /click me/i }),
    ).toBeInTheDocument()
  })
})
