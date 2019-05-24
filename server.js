const express = require('express')
const serveStatic = require('serve-static')
const app = express()
const path = require('path')
app.use(serveStatic(path.join(__dirname, '/build')))
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
      next()
    }
  })
}
const port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port) // eslint-disable-line no-console
