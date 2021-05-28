/* global ymaps */

const geolocation = require('./geolocation')

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.

function map () {
  geolocation.locationCoords().then((coords) => {
    function init () {
      // eslint-disable-next-line no-new
      new ymaps.Map('map', {
        center: coords,
        zoom: 7
      })
    }
    ymaps.ready(init)
  })
}

module.exports = {
  map: map
}
