const generateBtn = document.getElementById('generate')
const zipCode = document.getElementById('zip').value
const userFeelings = document.getElementById('feelings').textContent

const url = 'api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&appid=12753cdcb473140f8d97e3bb1529014e'

const projectDate = {}
//EVENT LISTENER FOR GENERATE BTN
generateBtn.addEventListener('click', performAction())


function performAction() {
  getData('/allData',).then(function (data) {
    postData('').then(function (data) {
      updateUI()
    })
  })
}
// fetch("https://www.themealdb.com/api/json/v1/1/random.php")
//     .then((res) => res.json())
//     .then((res) => {
//       createMeal(res.meals[0]);
//       console.log(res);
//     });

const getData = async (url = "",){
  const data = await fetch()
  try {
    console.log(data)
  } catch {
    console.log("error",error)
  }
}

// const postData

