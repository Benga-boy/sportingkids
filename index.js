const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const router = require('./config/routes')
const errorHandler = require('./lib/errorHandler')
const { dbURI, port } = require('./config/environment')
// const path = require('path')
require('dotenv').config()

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.log(err)
    console.log('Mongo is connected!')
  }
)

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 5000 }))
app.use(bodyParser.json({ limit: '50mb' }))


app.use('/api', router)

app.use(errorHandler)

// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//   // Set a static folder
//   app.use(express.static('frontend/build'))

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   })
// }

app.use(express.static(`${__dirname}/frontend/build`))

app.use('/*', (req, res) => res.sendfile(`${__dirname}/frontend/build/index.html`))

app.listen(port, ()=> console.log(`Express is listening on port ${port}`))