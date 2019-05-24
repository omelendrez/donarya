const express = require('express')
const serveStatic = require('serve-static')
const app = express()
const path = require('path')
app.use(serveStatic(path.join(__dirname, '/build')))
const port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port) // eslint-disable-line no-console
