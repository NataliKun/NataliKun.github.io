const geolocation = require('./geolocation')
const map = require('./map')

function weather () {
  geolocation.locationName().then(weatherHistory)
}
function weatherHistory (city) {
  const temp = document.querySelector('#temperature')
  const cityName = document.querySelector('#City')
  return fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=4901a019dc4603210f8a661644c0e40c`)
    .then(response => {
      return response.json()
    }).then(data => {
      cityName.innerHTML = city
      const coordWeather = [data.coord.lat, data.coord.lon]
      map.renderMap(coordWeather)
      console.log(coordWeather)
      temp.innerHTML = data.main.temp + `<img src="https://openweathermap.org/img/wn/${data.weather['0'].icon}@2x.png"/>`
    })
}

module.exports = {
  weather: weather,
  weatherHistory: weatherHistory
}
