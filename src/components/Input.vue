<template>
  <div class="div-main">

    <b-tabs v-model="tabIndexInputType" pills card fill>

      <b-tab title="City name" :title-link-class="linkClassInputType(0)" active>
        <div class="div-style">
          <h3 class="title-search">Insert name of the city:</h3>
          <div><input v-model="inputCity" placeholder="insert city name" v-on:keyup.enter="get('city')"/></div>
          <div><button @click="get('city')">Search</button></div>
        </div>
      </b-tab>

      <b-tab title="Geo-coordinates" :title-link-class="linkClassInputType(1)">
        <div class="div-style">
          <h3 class="title-search">Insert geo-coordinates:</h3>
          <div><input v-model="inputLan" placeholder="Latitude" v-on:keyup.enter="get('coords')"/></div>
          <div><input v-model="inputLon" placeholder="Longitude" v-on:keyup.enter="get('coords')"/></div>
          <div><button @click="get('coords')">Search</button></div>
        </div>
      </b-tab>

      <b-tab title="IP position" :title-link-class="linkClassInputType(2)">
        <div class="div-style">
          <h3 class="title-search">Get AQI from your IP position:</h3>
          <button id="buttonCoordinates" @click="get('here')">Search</button>
        </div>
      </b-tab>

    </b-tabs>

    <div>
      <b-tabs v-model="tabIndexInfo" pills card fill>
        <b-tab :title="'AQI: ' + aqi" :title-link-class="linkClassInfo(0)" active>
          <b-card bg-variant="AQI_Hazardous" text-variant="white" header="Hazardous" class="text-center" v-if=" aqi > 300">
            <p class="card-text font-weight-bold">AQI: {{ aqi }}</p>
            <p class="card-text">{{ longName }}</p>
            <p class="card-text">Health alert: everyone may experience more serious health effects</p>
          </b-card>
          <b-card bg-variant="AQI_Very_Unhealthy" text-variant="white" header="Very Unhealthy" class="text-center" v-else-if=" aqi > 200">
            <p class="card-text font-weight-bold">AQI: {{ aqi }}</p>
            <p class="card-text">{{ longName }}</p>
            <p class="card-text">Health warnings of emergency conditions. The entire population is more likely to be affected</p>
          </b-card>
          <b-card bg-variant="AQI_Unhealthy" text-variant="white" header="Unhealthy" class="text-center" v-else-if=" aqi > 150">
            <p class="card-text font-weight-bold">AQI: {{ aqi }}</p>
            <p class="card-text">{{ longName }}</p>
            <p class="card-text">Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects</p>
          </b-card>
          <b-card bg-variant="AQI_Unhealthy_Sensitive" text-variant="white" header="Unhealthy for Sensitive Groups" class="text-center" v-else-if=" aqi > 100">
            <p class="card-text font-weight-bold">AQI: {{ aqi }}</p>
            <p class="card-text">{{ longName }}</p>
            <p class="card-text">Members of sensitive groups may experience health effects. The general public is not likely to be affected.</p>
          </b-card>
          <b-card bg-variant="AQI_Moderate" text-variant="white" header="Moderate" class="text-center" v-else-if=" aqi > 50">
            <p class="card-text font-weight-bold">AQI: {{ aqi }}</p>
            <p class="card-text">{{ longName }}</p>
            <p class="card-text">Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.</p>
          </b-card>
          <b-card bg-variant="AQI_Good" text-variant="white" header="Good" class="text-center" v-else-if=" aqi <= 50">
            <p class="card-text font-weight-bold">AQI: {{ aqi }}</p>
            <p class="card-text">{{ longName }}</p>
            <p class="card-text">Air quality is considered satisfactory, and air pollution poses little or no risk</p>
          </b-card>
        </b-tab>
        <b-tab :title="name" :title-link-class="linkClassInfo(1)">
            <b-card class="bg-secondary text-light">
              <p class="card-text font-weight-bold">Information: </p>
              <p class="card-text">{{ longName }}</p>
              <p class="card-text">Coordinates:</p>
              <p class="card-text">Latitude: {{ lat }}</p>
              <p class="card-text">Longitude: {{ lon }}</p>
            </b-card>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import service from '../js/service'
import lodash from '../js/lodash'

export default {
  name: 'Input',
  data () {
    return {
      Data: {},
      aqi: '-',
      longName: '',
      name: 'Location: -',
      lat: '',
      lon: '',
      inputCity: '',
      inputLan: '',
      inputLon: '',
      tabIndexInputType: 0,
      tabIndexInfo: 0
    }
  },
  methods: {
    async get (usage) {
      if (usage === 'city') {
        this.data = await service.axiosRequest(usage, this.inputCity)
        this.inputCity = ''
      } else if (usage === 'coords') {
        this.data = await service.axiosRequest(usage, null, this.inputLan, this.inputLon)
        this.inputLan = ''
        this.inputLon = ''
      } else {
        this.data = await service.axiosRequest(usage)
      }
      this.data = this.data.data
      this.lat = this.data.city.geo[0]
      this.lon = this.data.city.geo[1]
      this.longName = this.data.city.name
      this.name = this.longName.substr(0, this.longName.indexOf(','))
      if (this.name === '') { this.name = this.data.city.name }
      this.aqi = lodash.lodashCheck(this.data)

      console.log(this.data)
    },
    linkClassInputType (idx) {
      if (this.tabIndexInputType === idx) {
        return ['bg-secondary', 'text-light', 'font-weight-bold']
      } else {
        return ['bg-light', 'text-dark']
      }
    },
    linkClassInfo (idx) {
      if (this.tabIndexInfo === idx) {
        return ['bg-secondary', 'text-light', 'font-weight-bold']
      } else {
        return ['bg-light', 'text-dark']
      }
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../scss/custom.scss';

.div-main {
  width: 65vw;
  max-width: 600px;
  margin: auto;
  padding-bottom: 20px;
  border: 2px black solid;
  border-radius: 15px;
  box-shadow: 0 0 10px #000;
  background-color: rgba(255, 255, 255, 0.3);
}

input {
  max-width: 275px;
  width: 20vw;
  max-height: 30px;
  height: 6vw;
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
  color: black;
  font-weight: 500;
}

button {
  margin: 0;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #4b4b4bd0;
  color: rgb(255, 255, 255);
  padding: 5px;
  margin: 5px;
  max-width: 120px;
  max-height: 40px;
  width: 15vw;
  height: 7vw;
  cursor: pointer;
  font-size: 20px;
  transition: box-shadow 0.2s;
}

.div-style {
  width: 70%;
  margin: auto;
  border: 1px rgb(141, 141, 141) solid;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
  padding: 15px;
  max-width: 400px;
  box-shadow: 0 0 5px rgb(54, 54, 54);
  transition: box-shadow 0.3s;
  background-color: rgba(255, 255, 255, 0.4);
  font-family: Fraunces;
}

.div-style:hover {
  transition: box-shadow 0.7s;
  box-shadow: 0 0 10px rgb(77, 77, 77);
}

button:hover {
  transition: box-shadow 0.2s;
  box-shadow: 0 0 3px #000;
}

.title-search {
  margin: 0;
  font-size: 25px;
}

.tab-title-class {
  color: red;
}

@media screen and (max-width: 500px) {
  button, input {
    font-size: 4vw;
  }
  .aqi {
    font-size: 3vw;
  }
  .title-search {
    font-size: 4vw;
  }
}

</style>
