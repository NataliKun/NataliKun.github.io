const m = require('./map')
const weather = require('./weather')

function newFetch () {
  const response = {
    json: function () {
      const b = {
        coord: { lon: 37.6156, lat: 55.7522 },

        weather: [{
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }],
        main: {
          temp: 22.88,
          feels_like: 22.03,
          temp_min: 21.82,
          temp_max: 23.29,
          pressure: 1024,
          humidity: 31,
          sea_level: 1024,
          grnd_level: 1006
        }
      }
      return b
    }
  }
  const one = new Promise(function (resolve, reject) {
    resolve(response)
  })
  return one
}

function getQuerySelector () {
  const registry = {}
  return function (selector) {
    if (!registry[selector]) {
      registry[selector] = { innerHTML: '' }
    }
    return registry[selector]
  }
}

test('weather', () => {
  window.fetch = jest.fn(() => { return newFetch() })
  window.document.querySelector = getQuerySelector()

  const render = m.renderMap
  m.renderMap = function () {}

  return weather.weatherHistory('Moscow').then(() => {
    expect(window.document.querySelector('#City')).toEqual({ innerHTML: 'Moscow' })
  }).finally(() => {
    m.renderMap = render
  })
})
