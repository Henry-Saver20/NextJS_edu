import React, { useEffect, useState } from 'react';
import Name from '../components/Name'
import Board from '../components/Board'
const Game = () => {
    return (
    <div className='container'>
      <Name/>
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

  export default Game