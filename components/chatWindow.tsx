import React, { useState, useEffect, useRef } from 'react'
import ChatLine from '../components/chatLine'
import socketIOClient from 'socket.io-client'

interface interMsg {
  msg: string;
  name: string;
}
const ChatWindow = () => {
  const [mList, setList] = useState<interMsg[]>([])
  const [msg, setMsg] = useState('')
  const [name, setName] = useState('')
  const inputRef = useRef(null)

  // function updateList () {
  //   setList(mList => [...mList, fullMsg])
  //   console.log(mList.values)
  //   console.log(fullMsg)
  // }
  // function handleClick () {
  //   if (document.getElementById('name').value !== '') { document.getElementById('name').readOnly = true }
  //   console.log('running')
  //   fullMsg.n = document.getElementById('name').value
  //   fullMsg.t = document.getElementById('m').value
  //   fullMsg.id = new Date().getTime()
  //   console.log(fullMsg.id)
  //   updateList()
  //   document.getElementById('m').value = ''
  // }

  const sendMessage = async () => {
    if (msg) {
      const message: interMsg = {
        msg,
        name
      }
      const res = await fetch('/api/msgHandler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      })
      if (res.ok) {
        setMsg('')
        document.getElementById('m').value = ''
        document.getElementById('name').style.visibility = 'hidden'
        document.getElementById('nameBanner').style.visibility = 'visible'
      }
    }
    inputRef?.current?.focus()
  }
  useEffect(() => {
    const listener = event => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        sendMessage()
        console.log('pressed')
        // event.preventDefault()
      }
    }
    document.addEventListener('keyup', listener)
    return () => {
      document.removeEventListener('keyup', listener)
    }
  }, [sendMessage])

  useEffect((): any => {
    const socket = socketIOClient.connect(process.env.BASE_URL, {
      path: '/api/socketio'
    })
    socket.on('connect', () => {
      console.log('Socket has been connected :D - ID: ', socket.id)
    })
    socket.on('message', (message: interMsg) => {
      mList.push(message)
      setList([...mList])
      console.log(mList)
    })
    if (socket) return () => socket.disconnect()
  }, [mList])

  return (
        <div className='container'>
          <input id="name" placeholder="Name Here" onChange={(n) => { setName(n.target.value) }}></input>
          <h2 id='nameBanner'>Current User: {name}</h2>
          <div id='msgHolder'>
            <ul>
              {mList.map(user => {
                return (
                    <ChatLine key={user.id} name={user.name} m={user.msg}/>
                )
              })}
            </ul>
          </div>
          <textarea id="m" placeholder="Messege Here" onChange={(e => { setMsg(e.target.value) })}></textarea>
          <span><button id='subBtn' onClick={sendMessage}>Send</button></span>
        </div>
  )
}
export default ChatWindow
