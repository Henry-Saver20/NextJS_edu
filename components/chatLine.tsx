import React, { useState } from 'react'

const ChatLine = (props) => {
  return (<p className='cLine' key={props.id}><span>{props.name}: {props.m}</span></p>)
}
export default ChatLine
