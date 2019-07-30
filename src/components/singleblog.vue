<template>
  <div id="singleblog">
      <h1>{{blog.title}}</h1>
      <article>{{blog.body}}</article>
  </div>
</template>

<script>
  export default{
    name:'singleblog',
    data(){
      return {
          id:this.$route.params.id,
          blog:{}
      }
    },
    created:function(){
        this.axios.get('/single'+this.id).then(res => {
          console.log(res);
        })
    }
  }
</script>

<style scoped>
  #singleblog{
    max-width: 960px;
    padding: 20px;
    margin:0 auto;
    background: #eee;
    border:1px dotted #aaa;
  }
</style>
