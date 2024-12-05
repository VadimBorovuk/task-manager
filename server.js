const express = require('express')
const bodyParser = require('body-parser')

const PORT = 6001
const app = express()

app.use(bodyParser.json())

app.listen(PORT, ()=>{
  console.log('server started')
})
