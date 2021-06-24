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

type PrivateChatLineProps = ChatLineProps & {
  from : string
}

export const PrivateChatLine : FC<PrivateChatLineProps> = ({
  id = 'wtf',
  name = 'anon',
  m = '<no message>',
  from = '<nobody>'
}: PrivateChatLineProps) => (<p className='cLine' key={id}><span><em>(from:{from})</em> {name}: {m} </span></p>)


export default ChatLine
