<template>
  <div id="app">
    <headerblog></headerblog>
    <router-view></router-view>
  </div>
</template>

<script>
  import showblog from './components/showblog';
  import addblog from './components/addblog';
  import headerblog from './components/headerblog';
  import singleblog from './components/singleblog';
  import test from './components/test';
export default {
  name: 'App',
  components:{
    showblog,
    addblog,
    headerblog,
    singleblog,
    test
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  /* text-align: center; */
}
</style>
