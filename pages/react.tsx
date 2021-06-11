import React, { useEffect, useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Head from 'next/head';
import Game from '../components/Game'




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

// The below code is part of the official REACT tutorial.It has now been modified with React Hooks. 


  // ========================================

    if(typeof window == 'object'){
     // ReactDOM.render(<Game />,document.getElementById('root'));
    }

  
  //End of tic-tac-toe Tutorial js