/* eslint-disable */
const axios = require('axios')

var service = {
  async axiosRequest (usage, city, lat, lon) {
    var options = {}
    if (usage === 'city') {
      options = {
        method: 'GET',
        url: 'https://api.waqi.info/feed/' + city + '/',
        params: {
          token: process.env.VUE_APP_AICQN_API_KEY
        }
      }
    } else if (usage === 'coords') {
      options = {
        method: 'GET',
        url: 'https://api.waqi.info/feed/geo:' + lat + ';' + lon + '/',
        params: {
          token: process.env.VUE_APP_AICQN_API_KEY
        }
      }
    } else if (usage === 'gps') {
      let getCurrentPositionOptions = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
          const options = {
            method: "GET",
            url:
              "https://api.waqi.info/feed/geo:" +
              position.coords.latitude +
              ";" +
              position.coords.longitude +
              "/",
            params: {
              token: process.env.VUE_APP_AICQN_API_KEY
            }
          };
          return resolve(options);
        });
      });
      options = await getCurrentPositionOptions;
      // console.log(options);
    } else {
      options = {
        method: 'GET',
        url: 'https://api.waqi.info/feed/here/',
        params: {
          token: process.env.VUE_APP_AICQN_API_KEY
        }
      }
    }
    try {
      console.log(options)
      const response = await axios.request(options)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}

export default service
