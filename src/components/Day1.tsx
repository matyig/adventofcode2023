import React from 'react'

export const Day1: React.FC<{ input: string }> = ({ input }) => {
  const getFirstAndLastNummer = (nummer: string) => {
    const firstNummer = nummer.slice(0, 1)
    const lastNummer = nummer.slice(-1)
    return firstNummer + lastNummer
  }

  const replaceAlphabetNummers = (line: string) => {
    return line
      .replace(/one/g, 'o1e')
      .replace(/two/g, 't2o')
      .replace(/three/g, 't3e')
      .replace(/four/g, '4')
      .replace(/five/g, '5e')
      .replace(/six/g, '6')
      .replace(/seven/g, '7n')
      .replace(/eight/g, 'e8t')
      .replace(/nine/g, 'n9e')
  }

  const result1 = input
    .split('\n')
    .map((line) => line.trim().replace(/[a-z]/g, ''))
    .filter((line) => line.length != 0)
    .map((nummer) => getFirstAndLastNummer(nummer))
    .reduce(
      (accumulator, currentValue) => accumulator + parseInt(currentValue),
      0
    )

  const result2 = input
    .split('\n')
    .map((line) => replaceAlphabetNummers(line))
    .map((line) => line.trim().replace(/[a-z]/g, ''))
    .filter((line) => line.length != 0)
    .map((nummer) => getFirstAndLastNummer(nummer))
    .reduce(
      (accumulator, currentValue) => accumulator + parseInt(currentValue),
      0
    )

  return (
    <div>
      <h2>--- Day 1: Trebuchet?! ---</h2>
      <p>
        Result1: <span data-testid="day1-result1">{result1}</span> Result2:{' '}
        <span data-testid="day1-result2">{result2}</span>
      </p>
    </div>
  )
}
