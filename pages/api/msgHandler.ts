import { NextApiRequest } from 'next'
import { NextApiResponseServerIO } from '../types/next'

export default (req: NextApiRequest, res: NextApiResponseServerIO): void => {
  if (req.method === 'POST') {
    const message = req.body
    res?.socket?.server?.io?.emit('message', message) // Sends messege to all connected users when POST req is made by a user
    res.status(201).json(message)
  }
}
