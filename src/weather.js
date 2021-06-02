const geolocation = require('./geolocation')

function weather () {
  geolocation.locationName().then(weatherHistory)
}
function weatherHistory (city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=4901a019dc4603210f8a661644c0e40c`)
    .then(response => {
      return response.json()
    }).then(data => {
      cityName.innerHTML = city
      temp.innerHTML = data.main.temp + `<img src="https://openweathermap.org/img/wn/${data.weather['0'].icon}@2x.png"/>`
    })
}

const temp = document.querySelector('#temperature')
const cityName = document.querySelector('#City')

module.exports = {
  weather: weather,
  weatherHistory: weatherHistory
}
