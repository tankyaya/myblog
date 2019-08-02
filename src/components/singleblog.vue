<template>
  <div id="singleblog">
    <h1>{{blog.title}}</h1>
    <p>
      类型:
      <span v-if="blog.categories1">Css</span>
      <span v-if="blog.categories2">JavaScript</span>
      <span v-if="blog.categories3">Jqruey</span>
      <span v-if="blog.categories4">Vue.js</span>
      <span v-if="blog.categories5">NodeJs</span>
      </p>
     <p>作者:{{blog.author}}</p>
     <p>发表时间:{{blog.time}}</p>
    <div v-model="blog.content" style="font-size: 24px;" id="content"><pre>{{blog.content}}</pre></div>
    <button @click="back">返回首页</button>
  </div>
</template>

<script>
export default {
  name: "singleblog",
  data() {
    return {
      id:this.$route.query.id,
      blog: {}
    };
  },

  mounted:function(){
    var that = this;
      this.axios.get('/single?id='+this.id).then(res => {
        that.blog = res.data[0];
        //console.log(that.blog);
      })
  },
  methods:{
    back:function(){
      var that = this;
       this.$router.push({path: '/showblog'});
    }
  }
};
</script>

<style scoped>
#singleblog {
  max-width: 960px;
  padding: 20px;
  margin: 0 auto;
  background: #eee;
  border: 1px dotted #aaa;
}

button{
  margin-top: 40px;
  display: block;
  marign:20px 0;
  background: crimson;
  color:#fff;
  border:0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  float:right;
  }
#content{
  max-width: 960px;
  word-break:break-all;
  word-wrap:break-word;
}

</style>
