const _ = require('lodash')

var lodash = {
  lodashCheck (weatherData) {
    var data = {
      aqi: _.get(weatherData, 'aqi', 'unknown'),
      lat: _.get(weatherData.city.geo, '[0]', 'unknown'),
      lon: _.get(weatherData.city.geo, '[1]', 'unknown'),
      longName: _.get(weatherData.city, 'name', 'unknown')
    }
    return data
  }
}

export default lodash
