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
export default {
  name: 'App',
  components:{
    showblog,
    addblog,
    headerblog,
    singleblog
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
