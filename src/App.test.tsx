import { render, screen } from '@testing-library/react'
import App from './App'

test('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />)
    expect(screen.getByText(/Advent of Coding 2023/i)).toBeInTheDocument()
  })
})
