import { render, screen } from '@testing-library/react'
import { Greet } from '../geet2/Greet'

test('Greet renders correctly', () => {
  render(<Greet />)
  const textElement = screen.getByText('Hallo')
  expect(textElement).toBeInTheDocument()
})

test('Greet renders with a name', () => {
  render(<Greet name="Baba" />)
  const textElement = screen.getByText('Hallo Baba')
  expect(textElement).toBeInTheDocument()
})
