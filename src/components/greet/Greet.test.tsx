import { render, screen } from '@testing-library/react'
import { Greet } from './Greet'

test('Greet renders correct', () => {
  render(<Greet />)
  //const textElement = screen.getByText('Hallo');
  const textElement = screen.getByText(/hallo/i)
  expect(textElement).toBeInTheDocument()
})
