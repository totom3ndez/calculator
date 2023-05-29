import React, { useState } from 'react'
import { numberButtons, actionButtons } from './constants.js'

function App () {
  const [firstNumber, setFirstNumber] = useState(null)
  const [secondNumber, setSecondNumber] = useState(null)
  const [action, setAction] = useState(null)
  const [result, setResult] = useState(0)

  function handleNumberClick (e) {
    if (action === null) {
      setFirstNumber(e.target.value)
    } else {
      setSecondNumber(e.target.value)
    }
  }
  function applyOperation () {
    const first = Number(firstNumber)
    const second = Number(secondNumber)
    if (action === '+') {
      setResult(first + second)
    } else if (action === '-') {
      setResult(first - second)
    } else if (action === '*') {
      setResult(first * second)
    } else {
      setResult(first / second)
    }
  }
  function clearOperation () {
    setFirstNumber(null)
    setSecondNumber(null)
    setAction(null)
  }

  function handleActionClick (e) {
    if (e.target.value === 'C') {
      clearOperation()
      setResult(null)
    } else if (e.target.value === '=') {
      applyOperation()
      clearOperation()
    } else {
      setAction(e.target.value)
    }
  }
  return (
    <div className='calculator'>
      <div className='calculator-display'>
        {result !== 0 && <span>{result}</span> }
        <span>{firstNumber}</span>
        <span>{action}</span>
        <span>{secondNumber}</span>
      </div>
      <div className='calculator-grid'>
        {
          numberButtons.map(button => <button onClick={handleNumberClick} className='calculator-button' value={button.value} key={button.id}>{button.value}</button>)
        }
      </div>
      <div className='calculator-grid'>
        {
          actionButtons.map(button => <button onClick={handleActionClick} className='calculator-button' value={button.value} key={button.id}>{button.value}</button>)
        }
      </div>
    </div>
  )
}

export default App
