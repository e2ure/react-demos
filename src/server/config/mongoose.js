const mongoose = require('mongoose')
const { mongo, env } = require('./vars')

mongoose.Promise = Promise

// Exit app on error ocurred
mongoose.connection.on('error', err => {
  console.error(`MongoDb connection error: ${err}`)
  process.exit(-1)
})

// If env is dev show logs
if (env === 'development') {
  mongoose.set('debug', true)
}

exports.connect = () => {
  mongoose.connect(mongo.uri, {
    keepAlive: 1,
    useMongoClient: true,
  })

  return mongoose.connection
}
