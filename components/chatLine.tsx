import React, { FC } from 'react'

type ChatLineProps = {
  id : string
  name: string
  m: string
}

const ChatLine : FC<ChatLineProps> = ({
  id = 'wtf',
  name = 'anon',
  m = '<no message>'
}: ChatLineProps) => (<p className='cLine' key={id}><span>{name}: {m}</span></p>)

export default ChatLine
