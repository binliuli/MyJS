<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// https://www.css-js.com/ 压缩
import * as obj from "./until/my";
// import * as obj from "./until/new"
export default {
  name: "App",
  components: {},
  mounted() {
    const str = "131126198904120677";
    console.log(obj.IdCard(str, 3));
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 2000px;
}
</style>
