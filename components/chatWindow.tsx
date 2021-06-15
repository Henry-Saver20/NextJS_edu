import React, { useState } from 'react'

const ChatWindow = () => {
  const [chatText, setText] = useState(false)
  return (
        <div>
            <p>{chatText}</p>
        </div>
  )
}
export default ChatWindow
