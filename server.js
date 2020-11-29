//INSTALLING EXPRESS,CORS,BODY-PARSER
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

//EXPRESS APP POINTING TO .html,.css,.js FILES
app.use(express.static('public'))
//LOCAL SERVER RUNNING AND PRODUCING FEEDBACK TO COMMAND LINE
const port = 8000
const server = app.listen(port, () => console.log(`local host on port:${port}`))

app.get('/', function (req, res) {
  res.send('Hello world')
})
