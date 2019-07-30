<template>
  <div id="showblog">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="search">
    <!-- list in comeout是便利computed方法中经过过滤之后的数组 -->
     <div class="connent" v-for="list in comeout">
       <router-link v-bind:to="'/single/'+list.id">
          <h2>{{list.title}}</h2>
          </router-link>
          <article>
            {{list.content | cut}}
          </article>
      </div>
  </div>
</template>

<script>
  export default{
    name:'showblog',
    data(){
      return {
        lists:[],
        search:""
      }
    },
    created:function(){
      var that = this;
      that.axios.get('/show').then(res => {
        // /console.log(res.data);
        that.lists = res.data;
        })
      .catch(err => {console.log(err)})
     },
     computed:{
       comeout:function(){
         /*filter是过滤器,
         将用户输入的内容search和lists中的内容相匹配(运用match函数)
         匹配完成之后返回给comeout，此时comeout是搜索匹配之后满足搜索内容的数组
         */
         return this.lists.filter((list) =>{
           return list.title.match(this.search);
         })
       }
     }
  }
</script>

<style scoped>
 #showblog{
   max-width: 800px;
   margin:0 auto;
 }
 .connent{
   padding: 20px;
   margin: 20px 0;
   box-sizing: border-box;
   background: #eee;
 }
 input{
   padding: 8px;
   width: 100%;
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
 }
 a{
   text-decoration: none;
   color: #444;
 }
</style>
