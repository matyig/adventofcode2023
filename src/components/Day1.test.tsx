import { render, screen } from '@testing-library/react'
import { Day1 } from './Day1'

describe('Day1', async () => {
  it('result1 should be 142', () => {
    const input: string = `1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet`

    render(<Day1 input={input} />)
    expect(screen.getByText(/142/i)).toBeInTheDocument()
  })

  it('result2 should be 281', () => {
    const input: string = `two1nine
    eightwothree
    abcone2threexyz
    xtwone3four
    4nineeightseven2
    zoneight234
    7pqrstsixteen`

    render(<Day1 input={input} />)
    expect(screen.getByText(/281/i)).toBeInTheDocument()
  })
})
