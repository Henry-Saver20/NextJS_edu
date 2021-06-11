import React, { useEffect, useState } from 'react';


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

  export default Name