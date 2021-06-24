import { NextApiRequest } from 'next'
import { NextApiResponseServerIO } from '../types/next'
import { Server as ServerIO } from 'socket.io'
import { Server as NetServer } from 'http'

export const config = {
  api: {
    bodyParser: false
  }
}

export default async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (!res.socket.server.io) { // From Socket.io tutorial. Should allow socket to be used
    const httpServer: NetServer = res.socket.server as any
    const io = new ServerIO(httpServer, {
      path: '/api/socketio'
    })
    res.socket.server.io = io // Adds Socketio to Next js response
    console.log('New Socket.io server Created! Yay :D')
  }
  res.end()
}
