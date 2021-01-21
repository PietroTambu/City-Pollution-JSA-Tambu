/* eslint-disable */
<template>
  <div class="div-main">

    <div class="aqi">
      <h1>{{ name }}</h1>
      <h1>AQI: {{ aqi }}</h1>
    </div>

    <div class="div-search">
      <h3 class="title-search">Insert name of the city:</h3>
      <div><input v-model="inputCity" placeholder="insert city name"/></div>
      <div><button @click="get('city')">Search</button></div>
    </div>

    <div class="div-search">
      <h3 class="title-search">Insert geo-coordinates:</h3>
      <div><input v-model="inputLan" placeholder="insert latitude"/></div>
      <div><input v-model="inputLon" placeholder="insert longitude"/></div>
      <div><button @click="get('coords')">Search</button></div>
    </div>

    <div class="div-search">
      <h3 class="title-search">Get AQI from your IP position:</h3>
      <button id="buttonCoordinates" @click="get('here')">Search</button>
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
      name: '',
      inputCity: '',
      inputLan: '',
      inputLon: ''
    }
  },
  methods: {
    async get (usage) {
      if (usage === 'city') {
        this.data = await service.axiosRequest(usage, this.inputCity)
      } else if (usage === 'coords') {
        this.data = await service.axiosRequest(usage, null, this.inputLan, this.inputLon)
      } else {
        this.data = await service.axiosRequest(usage)
      }
      this.data = this.data.data
      this.name = this.data.city.name
      this.aqi = lodash.lodashCheck(this.data)

      console.log(this.data)
    }
  }

}
</script>

<style scoped>

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

.div-search {
  width: 70%;
  margin: auto;
  border: 1px black solid;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
  padding: 15px;
  max-width: 400px;
  box-shadow: 0 0 5px #000;
  transition: box-shadow 0.3s;
  background-color: rgba(255, 255, 255, 0.4);
  font-family: Lobster;
}
.div-search:hover {
  transition: box-shadow 0.3s;
  box-shadow: 0 0 13px #000;
}

button:hover {
  transition: box-shadow 0.2s;
  box-shadow: 0 0 3px #000;
}

.aqi h1 {
  margin: auto;
  margin-top: 20px;
  font-family: Fraunces;
}

.title-search {
  margin: 0;
  font-size: 25px;
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
