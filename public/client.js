const generateBtn = document.querySelector('.form__submit')
const form = document.querySelector('.form')
const zip = document.querySelector('.form__zip')
const feeling = document.querySelector('.form__feeling')
const result = document.querySelector('.result')

result.style.display = 'none'

form.addEventListener('submit', (e) => {
  const body = { zip: zip.value, feeling: feeling.value }
  console.log({ body })
  e.preventDefault()
  fetch('/postData', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      fetch('/updateData')
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
          getResult(response)
          updateUI()
        })
    })
    .catch((error) => console.log(error))
})

function getResult(response) {
  document.querySelector('.result__zip').innerHTML = `Zip:${response.zip}`
  document.querySelector(
    '.result__feeling'
  ).innerHTML = `Feeling:${response.feeling}`

  document.querySelector('.result__temp').innerHTML = `Temperature:${Math.floor(
    response.temp
  )} C
  `
  document.querySelector('.result__date').innerHTML = `Today:${new Date(
    response.date
  ).toDateString()}`
  document.querySelector('.result__desc').innerHTML = response.description
  document.querySelector(
    '.result__location'
  ).innerHTML = `Location:${response.city},${response.country}`

  document
    .querySelector('.result__weather-state')
    .setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${response.icon}@2x.png`
    )
}

function updateUI() {
  result.style.display = 'flex'
  form.style.display = 'none'
}
