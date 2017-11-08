const Hapi = require('hapi')

const HOST = 'localhost'
const PORT = 3000

const server = new Hapi.Server()

server.connection({ port: PORT, host: HOST });

server.register({
  register: require('hapi-router'),
  options: {
    routes: 'routes.js'
  }
}, err => {
  if (err) throw err
})

server.start(err => {
  if (err) throw err
  console.log( `Server running at: ${server.info.uri}` )
})
