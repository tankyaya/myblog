<template>
  <div id="addblog">
    <h1>添加博客</h1>
    <div v-if="!state">
      <label>标题</label>
        <input type="text" v-model="blog.title" id="title">

      <label>内容</label>
        <textarea cols="30" rows="10" v-model="blog.content" id="content"></textarea>
      <label>分类</label>
      <div id="checkbox">
        <label>Css</label> <input type="checkbox" v-model="blog.categories" value="Css">
        <label>JavaScript</label> <input type="checkbox" v-model="blog.categories" value="JavaScript">
        <label>Jquery</label> <input type="checkbox" v-model="blog.categories" value="Jquery">
        <label>Vue.js</label> <input type="checkbox" v-model="blog.categories" value="Vue.js">
        <label>Nodejs</label> <input type="checkbox" v-model="blog.categories" value="Nodejs">
      </div>
      <label>作者</label><input type="text" v-model="blog.author">
      <button v-on:click="sub">添加博客</button>
    </div>
    <div v-else>
      <h2>提交成功</h2>
      <a href="http://127.0.0.1:9528/showblog/">点击返回主页面</a>
    </div>
  </div>
</template>

<script>
  export default{
    name:'addblog',
    data(){
      return{
        state:false,
        blog:{
          title:"",
          content:"",
          categories:[],
          author:""
        }
      }
    },
    methods:{
      sub:function(){
        var  item = this.blog;
        var that = this;
        var json = JSON.stringify(item);
          if(item.title!=""&&item.content!=""&&item.categories!=""&&item.author!=""){
            console.log(json);
            that.axios.post('/add',{item})
            .then(res =>{console.log(res)})
            .catch(err=>{console.log(err)})
            that.state = true;
          }
          else{
            alert("请检查未写完的内容!");
          }
      }
    }
  }
</script>

<style scoped>
  #addblog *{
    box-sizing: border-box;
  }
  #addblog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }

  input[type="text"],textarea{
    display: block;
    width: 100%;
    padding: 8px;
  }
  #checkbox label{
    display: inline-block;
    margin-top: 20px;
    margin-right: 10px;
  }
  button{
    margin-top: 20px;
    display: block;
    marign:20px 0;
    background: crimson;
    color:#fff;
    border:0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    flaot:right;
  }
  textarea{
    height: 200px;
  }
</style>
