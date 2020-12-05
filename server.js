const express = require('express')
const cors = require('cors')
const fetch = require('isomorphic-fetch')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(express.static('public'))

let projectData = {}

app.post('/postData', postData)

function postData(req, res) {
  let { zip, feeling } = req.body

  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=metric&appid=491b3d0e20d1888d860346513fc7011f`

  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log({ url })
      console.log({ response })
      projectData = {
        zip,
        feeling,
        temp: response.main.temp,
        description: response.weather[0].description,
        icon: response.weather[0].icon,
        city: response.name,
        country: response.sys.country,
        date: Date.now(),
      }

      res.send({ status: 'success' })
    })
    .catch((error) => console.log(error))
}

app.get('/updateData', updateData)

function updateData(req, res) {
  res.send(projectData)
}

app.listen(8000, () => {
  console.log('server is running on port 8000.')
})
