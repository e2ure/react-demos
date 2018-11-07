const http = require('http')
const io = require('socket.io')
Promise = require('bluebird')

const { port, env, host, apiHost } = require('./config/vars')
const app = require('./config/express')
const log = require('./config/logger')
const mongoose = require('./config/mongoose')
const pkg = require('../../package.json')

// init mongoose connection
mongoose.connect()
const server = http.Server(app)
const socket = io(server)
socket.set(
  'origins',
  'http://localhost:3000 http://107.23.229.5:3000/ http://107.23.229.5:3001/'
)
app.set('socketio', socket)

function init(error) {
  // se pinta el nombre en ASCII
  log.asciiName()
  // se pinta una linea divisora
  log.line()

  if (error) {
    switch (error.code) {
      case 'EACCESS':
        log.eaccess()
        break
      case 'EADDRINUSE':
        log.addrInUse(port)
        break
      default:
        console.error(
          `Hubo un error al iniciar el servidor de express: ${error}`
        )
        break
    }
    log.line()
    process.exit(1)
  }

  const { name } = pkg
  const data = { debug: false, apiHost, host, name, env, port }
  if (
    process.execArgv.includes('--debug') ||
    process.execArgv.includes('--inspect')
  ) {
    data.debug = true
  }

  // se muestra la informacion del proceso node
  log.displayInfo(data)
  log.line()
}

socket.on('connection', client => {
  console.log('a user connected')
})

server
  .listen(port, err => {
    init(err)
  })
  .on('error', err => {
    init(err)
  })

module.exports = server
