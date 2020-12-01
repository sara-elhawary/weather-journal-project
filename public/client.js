const generateBtn = document.getElementById('generate')

const date = document.getElementById('date_h2')
const temp = document.getElementById('temp_h2')
const content = document.getElementById('content_h2')

const zipCode = document.getElementById('zip').value
// const countryCode = document.getElementById('country').value
const apiKey = '12753cdcb473140f8d97e3bb1529014e'
const url = `api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`

console.log('hello')
//EVENT LISTENER FOR GENERATE BTN
generateBtn.addEventListener('click', performAction())

function performAction() {
  console.log(zipCode)
  fetch(url).then(function (response) {
    let data = response.json()
    console.log(data)
  })
}
// function performAction(e) {
//   e.preventDefault()
//   const content = document.getElementById('feelings').textContent
//   getData(url, zipCode, apiKey)
//     .then(function (data) {
//       postData('/addData', {
//         date: data.date,
//         temp: data.temp,
//         content: content,
//       })
//     })
//     .then(updateUI())
// }

// const getData = async (url, zipCode, apiKey) => {
//   const res = await fetch(url + zipCode + apiKey)
//   try {
//     const data = await res.json()
//     console.log(data)
//     return data
//   } catch (error) {
//     console.log('error', error)
//   }
// }

// const updateUI = async () => {
//   const request = await fetch('/all')
//   try {
//     const Data = await request.json()
//     date.innerHTML = Data[0].date
//     temp.innerHTML = Data[0].temp
//     content.innerHTML = Data[0].content
//   } catch (error) {
//     console.log('error', error)
//   }
// }
