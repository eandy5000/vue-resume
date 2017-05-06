const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

app.set('port', (process.env.PORT || 5000))

let template = fs.readFileSync(path.resolve('dist', 'index.html'), 'utf-8')

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.send(template)
})

app.listen(app.get('port'), () => {
  console.log(`listening on port: ${app.get('port')}`)
})
