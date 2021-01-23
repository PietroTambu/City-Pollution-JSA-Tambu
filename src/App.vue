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
  background-color: #bbbbbb;
}

</style>
