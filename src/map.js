/* global ymaps */

// const geolocation = require('./geolocation')

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.

/* function map () {
  geolocation.locationCoords().then(renderMap)
}
*/
let myMap

function renderMap (coords) {
  if (myMap) {
    myMap.setCenter(coords)
    return
  }
  ymaps.ready(init)

  function init () {
    // eslint-disable-next-line no-new
    myMap = new ymaps.Map('map', {
      center: coords,
      zoom: 7
    })
  }
  console.log('!!!!!!!!!!!!!!!!!!!!!', coords)
}

module.exports = {
  renderMap: renderMap
  // map: map
}
