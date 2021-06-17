import React, { useState } from 'react'

const ChatWindow = () => {
  const [cText, setText] = useState({
    name: '',
    msg: ''
  })
  const [Mmap, setMap] = useState(new Map())
  const handleClick = (n,m) => {
    setMap(new Map(Mmap.set(n,m)))
    //const {name, msg} = cText 
  }
  return (
        <div>
          <div>
            <ul>
              {[...Mmap.keys()].map(x => (
                <li key={x}>Mmap.get(x)</li>
              ))}
            </ul>
          </div>
          <textarea id="m" placeholder="Messege Here"></textarea>
          <button onClick={('Henry',document.getElementById('m').innerText) => handleClick()}>Submit</button>
        </div>
  )
}
export default ChatWindow
