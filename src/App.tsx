import { useEffect, useState } from 'react'
import './App.css'
import { Day1 } from './components/Day1'
import { Day2 } from './components/Day2'

import rawDay1Input from '../inputs/day1.txt'
import rawDay2Input from '../inputs/day2.txt'

const App = () => {
  const [day1Input, setDay1Input] = useState('')
  const [day2Input, setDay2Input] = useState('')

  useEffect(() => {
    fetch(rawDay1Input)
      .then((r) => r.text())
      .then((l) => setDay1Input(l))
  })
  useEffect(() => {
    fetch(rawDay2Input)
      .then((r) => r.text())
      .then((l) => setDay2Input(l))
  })

  return (
    <>
      <h1>Advent of Coding 2023</h1>
      <div className="card">
        <Day1 input={day1Input} />
        <Day2 input={day2Input} />
      </div>
      <p className="footer">Gabor Matyi</p>
    </>
  )
}

export default App
