const geolocation = require('./geolocation')

function newFetch () {
  const response = {
    json: function () {
      const b = {
        region: 'Moscow',
        longitude: '37.6171',
        latitude: '55.7483'
      }
      return b
    }
  }
  const one = new Promise(function (resolve, reject) {
    resolve(response)
  })
  return one
}

function errFetch () {
  const one = new Promise(function (resolve, reject) {
    reject(new Error('Не удалось установить местоположение'))
  })
  return one
}

test('geo', () => {
  window.fetch = jest.fn(() => { return newFetch() })
  return geolocation.locationName().then(data => {
    expect(data).toBe('Moscow')
  })
})

test('geo err', () => {
  window.fetch = jest.fn(() => { return errFetch() })
  window.alert = jest.fn(() => { return 'Не удалось установить местоположение' })
  return geolocation.locationName().then(data => {
    expect(window.alert).toBeCalledWith('Не удалось установить местоположение')
  })
})

/*
test('geo coordinates', () => {
  window.fetch = jest.fn(() => { return newFetch() })
  return geolocation.locationCoords().then(data => {
    expect(data).toEqual([55.7483, 37.6171])
  })
})
*/
