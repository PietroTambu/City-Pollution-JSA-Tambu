/* eslint-disable */
<template>
  <div id="app">
    <b-navbar type="dark" variant="dark" toggleable="sm">
      <b-navbar-toggle target="nav_collapse" class="mx-auto"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse" class="mx-auto">
        <b-navbar-nav class="mx-auto"> <!-- class="mx-auto" : align center the navbar -->
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>

</script>

<style lang="scss">

@font-face {
  font-family: JosefinSans;
  src: url("./fonts/JosefinSans-VariableFont_wght.ttf");
}
@font-face {
  font-family: Lobster;
  src: url("./fonts/Lobster-Regular.ttf");
}
@font-face {
  font-family: PottaOne;
  src: url("./fonts/PottaOne-Regular.ttf");
}
@font-face {
  font-family: Fraunces;
  src: url("./fonts/Fraunces_9pt-Regular.ttf");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

body {
  overflow-x: hidden;
  background-color: #0ec2c5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%230ec2c5' width='11' height='11'/%3E%3Crect fill='%2300c1c6' x='10' width='11' height='11'/%3E%3Crect fill='%2300bfc8' y='10' width='11' height='11'/%3E%3Crect fill='%2300beca' x='20' width='11' height='11'/%3E%3Crect fill='%2300bdcb' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%2300bbcd' y='20' width='11' height='11'/%3E%3Crect fill='%2300bacf' x='30' width='11' height='11'/%3E%3Crect fill='%2300b9d1' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%2300b7d3' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%2300b6d6' y='30' width='11' height='11'/%3E%3Crect fill='%2300b4d8' x='40' width='11' height='11'/%3E%3Crect fill='%2300b3db' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%2300b1dd' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%2300b0e0' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%2300aee2' y='40' width='11' height='11'/%3E%3Crect fill='%2300ace5' x='50' width='11' height='11'/%3E%3Crect fill='%2300abe8' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%2300a9eb' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%2300a7ed' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%2300a6f0' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%2300a4f3' y='50' width='11' height='11'/%3E%3Crect fill='%2300a2f6' x='60' width='11' height='11'/%3E%3Crect fill='%2300a0f8' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23009efb' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23009cfe' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23009aff' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%230099ff' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%230097ff' x='70' width='11' height='11'/%3E%3Crect fill='%230095ff' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%230092ff' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%230090ff' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23008eff' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23008cff' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23008aff' x='80' width='11' height='11'/%3E%3Crect fill='%230087ff' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%230085ff' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%230083ff' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%230080ff' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23007eff' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23007bff' x='90' width='11' height='11'/%3E%3Crect fill='%230078ff' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%230075ff' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%230072ff' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23006fff' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23006cff' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%230069ff' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%230065ff' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%230062ff' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23005eff' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23005aff' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%230055ff' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%230051ff' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23004cff' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%230046ff' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%230040ff' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23003aff' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%230032ff' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%230028ff' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23001cff' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%232005ff' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}

</style>
