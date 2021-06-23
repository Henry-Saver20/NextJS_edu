import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ChatWindow from '../components/chatWindow'

export default function App () {
  return (
    <div className='container'>
      <h1>Chat Room Testing Area</h1>
      <ChatWindow/>
    </div>
  )
}