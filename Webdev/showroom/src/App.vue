<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div> -->
  <b-container fluid id="app">
    <div class="title">
      <img src="../src/assets/logo.svg" />
    </div>
    <!-- <home></home> -->
    <router-view />
  </b-container>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
.container-fluid {
  background-color: white;
  height: 80px;
  width: 100%;
  text-align: center;
  position: absolute;
  border-bottom: 1px solid rgb(184, 179, 179);
  margin: 0;
  margin-bottom: 20px;
}
.container-fluid img {
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
body {
  margin: 0;
}

/* tablet */
@media (min-width: 768px) {
  .container-fluid img {
    height: 10em;
  }
  .title img {
    height: auto;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .container-fluid img {
    height: 12em;
  }
  .title img {
    height: auto;
  }
}

/*Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .container-fluid img {
    height: 12em;
  }
  .title img {
    height: auto;
  }
}
</style>

//
<script>
//     import Home from './views/Home.vue';

//     export default {
//         components: {
//             home: Home
//         }
//     }
//
</script>
