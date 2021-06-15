import React from 'react'
import Game from '../components/Game'

export default function App () {
  return (
    <>
      <head>
        <title>Main Page</title>
      </head>
      <Game/>
    </>
  )
}

if (typeof window === 'object') {
  // ReactDOM.render(<Game />,document.getElementById('root'));
}

// End of tic-tac-toe Tutorial js
