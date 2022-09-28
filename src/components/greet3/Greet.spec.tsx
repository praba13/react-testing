import { render, screen } from '@testing-library/react'
import { Greet } from '../geet2/Greet'

describe('Nested', () => {
  it('renders correctly v tree', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hallo')
    expect(textElement).toBeInTheDocument()
  })

  describe('Nested two', () => {
    it('renders correctly v tree', () => {
      render(<Greet />)
      const textElement = screen.getByText('Hallo')
      expect(textElement).toBeInTheDocument()
    })
  })
})
