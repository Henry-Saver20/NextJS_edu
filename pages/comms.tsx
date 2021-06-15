import React, { useState } from 'react'
import ChatWindow from '../components/chatWindow'

export default function comms () {
  const [newDiv, setDiv] = useState('')
  const handleClick = () => {
    setDiv(newDiv + (<h1>Hello!</h1>))
  }
  // setDiv({content : "<h1>Player</h1>"});
  // const renderChats = () => { return (<ChatWindow/>) }
  return (
        <div className="container">
            <div><button onClick={() => handleClick()}>Add Participant</button></div>
            <div className="container">
                <ChatWindow/>
                <ChatWindow/>
            </div>
        </div>
  )
}
