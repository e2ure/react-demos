const { join } = require('path')

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'

require('dotenv-safe').load({
  path: join(__dirname, `../env/.env.${environment}`),
  sample: join(__dirname, `../env/.env.example`),
})

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  apiHost: process.env.API_HOST,
  host: process.env.HOST,
  mongo: {
    uri: process.env.MONGO_URI,
  },
  logs: process.env.LOGS,
}
