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
          document.querySelector('.result__zip').innerHTML = response.zip
          document.querySelector('.result__feeling').innerHTML =
            response.feeling
          document.querySelector('.result__temp').innerHTML = response.temp
          document.querySelector('.result__date').innerHTML = response.date
          document.querySelector(
            '.result__location'
          ).innerHTML = `${response.city},${response.country}`

          document
            .querySelector('.result__weather-state')
            .setAttribute(
              'src',
              `http://openweathermap.org/img/wn/${response.icon}@2x.png`
            )
          result.style.display = 'block'
          form.style.display = 'none'
        })
    })
    .catch((error) => console.log(error))
})
