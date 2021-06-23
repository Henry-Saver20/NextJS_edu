import React, { useState, useEffect } from 'react'
import ChatLine from '../components/chatLine'

const ChatWindow = () => {
  const [mList, setList] = useState([])
  const fullMsg = ({ id: 0, t: '', n: '' })

  function updateList () {
    setList(mList => [...mList, fullMsg])
    console.log(mList.values)
    console.log(fullMsg)
  }
  function handleClick () {
    if (document.getElementById('name').value !== '') { document.getElementById('name').readOnly = true }
    console.log('running')
    fullMsg.n = document.getElementById('name').value
    fullMsg.t = document.getElementById('m').value
    fullMsg.id = new Date().getTime()
    console.log(fullMsg.id)
    updateList()
    document.getElementById('m').value = ''
  }

  useEffect(() => {
    const listener = event => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        handleClick()
        console.log('pressed')
        // event.preventDefault()
      }
    }
    document.addEventListener('keyup', listener)
    return () => {
      document.removeEventListener('keyup', listener)
    }
  }, [handleClick])

  return (
        <div className='container'>
          <input id="name" placeholder="Name Here"></input>
          <div id='msgHolder'>
            <ul>
              {mList.map(user => {
                return (
                    <ChatLine key={user.id} name={user.n} m={user.t}/>
                )
              })}
            </ul>
          </div>
          <textarea id="m" placeholder="Messege Here"></textarea>
          <button id='subBtn' onClick={() => handleClick()}>Submit</button>
        </div>
  )
}
export default ChatWindow
