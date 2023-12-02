import { useEffect, useState } from 'react'
import './App.css'
import { Day1 } from './components/Day1'

import rawDay1Input from '../inputs/day1.txt'

const App = () => {
  const [day1Input, setDay1Input] = useState('')

  useEffect(() => {
    fetch(rawDay1Input)
      .then((r) => r.text())
      .then((l) => setDay1Input(l))
  })

  return (
    <>
      <h1>Advent of Coding 2023</h1>
      <div className="card">
        <Day1 input={day1Input} />
      </div>
      <p className="footer">Gabor Matyi</p>
    </>
  )
}

export default App
