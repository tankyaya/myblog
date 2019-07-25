<template>
  <div id="singleblog">
    <p>{{this.$route.query.name}}</p>
    <!-- <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>-->
  </div>
</template>

<script>
export default {
  name: "singleblog",
  data() {
    return {
      blog: {}
    };
  },
  computed: {
    blogId: function() {
      return this.$route.query.id;
    }
  },
  mounted: function() {
    console.log(this.blogId);
  }
  // mounted:function(){
  //     this.axios.get('/single?id='+this.id).then(res => {
  //       console.log(res);
  //     })
  // }
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
</style>
