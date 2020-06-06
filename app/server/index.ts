import fastify, { FastifyInstance } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'

const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify()

server
  .register(require('fastify-nextjs'))
  .after(() => {
    // @ts-ignore
    server.next('/')
  })

server.listen(3000, err => {
  if (err) throw err
  console.log('Server listenging on http://localhost:3000')
})
