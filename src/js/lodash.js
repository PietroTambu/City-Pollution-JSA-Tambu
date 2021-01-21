const _ = require('lodash')

var lodash = {
  lodashCheck (weatherData) {
    var aqi = _.get(weatherData, 'aqi', '---')
    return aqi
  }
}

export default lodash
