import React, { useState } from 'react'
import Square from '../components/Square'

function calculateWinner (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
const Board = () => {
  const [squares, setSqr] = useState(Array(9).fill(null))
  const [xNext, setX] = useState(true)
  const handleClick = (i) => {
    const squarez = squares.slice()
    if (calculateWinner(squarez) || squarez[i]) {
      return
    }
    squarez[i] = xNext ? 'X' : 'O'
    setSqr(squarez)
    setX(!xNext)
  }
  const handleBtn = () => {
    setSqr(Array(9).fill(null))
    setX(true)
  }
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)}/>
  }
  const winner = calculateWinner(squares)
  // let status = "Next Player: " + (xNext ? "X" : "O");
  let status
  if (winner) {
    status = 'Winner!: ' + winner
  } else {
    status = 'Next player: ' + (xNext ? 'X' : 'O')
  }
  return (
        <div>
          <p>{status}</p>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <button onClick={() => handleBtn()}>Restart</button>
        </div>
  )
}

export default Board
