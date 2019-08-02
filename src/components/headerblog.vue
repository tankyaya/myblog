<template>
  <nav>
    <ul>
      <li><router-link to="/showblog">博客总览</router-link>
      <router-link to="/addblog">写博客</router-link>
      <!-- <router-link to="/test">富文本编译</router-link> --></li>
    </ul>
   </nav>
</template>

<script>
  export default{
    name:'headerblog'
  }
</script>

<style scoped>
  ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  a{
    color:#fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
  }
  nav{
    background: crimson;
    padding: 30px 0;
    margin: 0 10px;
  }
  .router-link-active{
    background: rgba(255,255,255,0.8);
    color:#444;
  }
</style>
