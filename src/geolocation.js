
function locationName () {
  return fetch('https://get.geojs.io/v1/ip/geo.json')
    .then((response) => response.json())
    .then((data) => {
      return data.region
    })
}

async function locationCoords () {
  const response = await fetch('https://get.geojs.io/v1/ip/geo.json')
  const data = await response.json()

  return [+data.latitude, +data.longitude]
}

module.exports = {
  locationName: locationName,
  locationCoords: locationCoords
}
