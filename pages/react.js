import React, { useEffect, useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Head from 'next/head';



export default function App(){
  return (
    <>
      <head>
        <title>Main Page</title>
      </head>
      <Game/>
    </>
  );
}

const Name = () => {                                
  const [state, setState] = useState({ c: '' })
  const handleClick = (i) => (i === 0)
    ? setState({ c: 'blue' })
    : (i === 1)
        ? setState({ c: 'red' })
        : (i === 2)
            ? setState({ c: 'green' })
            : null   
     
  return (
    <div>
      <h2><a href='/'>Return to home</a></h2>
      <h2>Posts Stream Here:</h2>
      <h3><a href='posts/firstPost'>My First Blog Post</a></h3>
      <p>May 31, 2021</p>
      <div>
        <h1 style={{ color: state.c }}>Henry Saver</h1>
        <button onClick={() => handleClick(0)}>Blue</button>
        <button onClick={() => handleClick(1)}>Red</button>
        <button onClick={() => handleClick(2)}>Green</button>
      </div>
    </div>      
  )             
}
// The below code is part of the official REACT tutorial.It has now been modified with React Hooks. 

const Square = (props) => {
        return (
        <button className="square" onClick={() => props.onClick()}>
          {props.value}
        </button>
      );
}
  const Board = (props) => {
    const[squares, setSqr] = useState(Array(9).fill(null));
    const[xNext,setX] = useState(true);
    const handleClick = (i) => {
      const squarez = squares.slice();
      if (calculateWinner(squarez) || squarez[i]) {
        return;
      }
      squarez[i] = xNext ? 'X' : 'O';
      setSqr(squarez);
      setX(!xNext);
    }
    const handleBtn = () => {
      setSqr(Array(9).fill(null));
      setX(true);
    }
    const renderSquare = (i) => {
      return <Square value={squares[i]} onClick={() => handleClick(i)}/>;
    };
    const winner = calculateWinner(squares);
    //let status = "Next Player: " + (xNext ? "X" : "O");
    let status;
    if (winner) 
        {
            status = 'Winner!: ' + winner;
        } 
        else 
        {
            status = 'Next player: ' + (xNext ? 'X' : 'O');
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
      );
    }
  

  const Game = () => {
      return (
      <div className='container'>
        <Name></Name>
        <div className="game">
          <div className="game-board">
            <Board/>
          </div>
          <div className="game-info">
          </div>
        </div>
        <h2><a href='adminTest'>Admin Test Page</a></h2>
      </div>
      );
    }
  
  // ========================================

    if(typeof window == 'object'){
     // ReactDOM.render(<Game />,document.getElementById('root'));
    }


  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  //End of tic-tac-toe Tutorial js