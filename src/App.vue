<template>
  <div id="app">
    <alerts></alerts>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Trocchi');

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {

  background: #FFAB98;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Trocchi', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: white;
  box-shadow: 1em 1em 10em rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  max-width: 800px;
  border-radius: 5px;
  padding: 1em;
}

@media screen and (min-width: 600px) {
  #app {
    padding: 2em;
  }
}

@media screen and (min-width: 800px) {
  body {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
</style>
