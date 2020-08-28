<template>
  <div id="app">
    <h1>欢迎使用Vue</h1>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*text-align: center;
  color: #2c3e50;*/
  color: #16b1a4;
  margin-top: 5px;
  width: 100%;
}
</style>
