import React, { useEffect } from 'react';
import ReactDOM, { render } from 'react-dom';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Head from 'next/head';


export default function def(){
    return (
      <>
        <head>
          <title>Admin Page</title>
        </head>
        <h2><a href='react'>Return to main page</a></h2>
        <h2>This is a testing page for an idea for vocal administration</h2>
        <Name/>
      </>
    );
  }


  class Name extends React.Component {
    constructor(props){
       super(props);
       this.state = {
         mute : "",
         c: ""
       }
 
   }
  handleClick(i){
   if(i === 0)
   {
     this.setState ({
        c : "red"
     })
   }
  }
   render() {
     return (
     <div>
       <div>
         <h1>John Doe </h1> 
         <button onClick={() => this.handleClick(0)}>Mute / Unmute</button>
         <button onClick={() => this.handleClick(1)}>Remove From Group</button>

         <h1>Jane Doe</h1> 
         <button onClick={() => this.handleClick(0)}>Mute / Unmute</button>
         <button onClick={() => this.handleClick(1)}>Remove From Group</button>
       </div>
     </div>
     );
    }
  }
  