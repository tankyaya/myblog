<template>
  <div id="showblog">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="search" />
    <!-- list in comeout是便利computed方法中经过过滤之后的数组 -->
    <div class="connent" v-for="list in comeout" @click="toDetail(list)">
      <h2>{{list.title}}</h2>
      <article>{{list.content | cut}}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: "showblog",
  data() {
    return {
      lists: [],
      search: ""
    };
  },
  created: function() {
    var that = this;
    that.axios
      .get("/show")
      .then(res => {
        that.lists = res.data;
      })
      .catch(err => {
        that.lists = [
          {
            id: "118a36f0-b1d2-11e9-b108-43d7a68cc544",
            author: "wxy",
            title: "1-测试通车-test",
            content:
              "此贴恭喜vue + nodejs + mysql连接成功\n后续将全部步骤上传至本博客\n敬请期待！！\n                                                        -2019.7.29 15:25",
            time: "2019-07-29 16:46:29",
            categories1: 1,
            categories2: 0,
            categories3: 0,
            categories4: 0,
            categories5: 0
          },
          {
            id: "5b50d2d0-b21d-11e9-bbee-3bb40a05236f",
            author: "wxy",
            title: "test",
            content: "qwe",
            time: "2019-07-30 00:24:36",
            categories1: 0,
            categories2: 1,
            categories3: 0,
            categories4: 0,
            categories5: 0
          },
          {
            id: "f7b98490-b1dd-11e9-89da-218c1a98f536",
            author: "wxy",
            title: "2-test",
            content: "this is a test blog.",
            time: "2019-07-29 16:50:51",
            categories1: 1,
            categories2: 0,
            categories3: 0,
            categories4: 0,
            categories5: 0
          }
        ];
        console.log(err);
      });
  },
  computed: {
    comeout: function() {
      /*filter是过滤器,
         将用户输入的内容search和lists中的内容相匹配(运用match函数)
         匹配完成之后返回给comeout，此时comeout是搜索匹配之后满足搜索内容的数组
         */
      return this.lists.filter(list => {
        return list.title.match(this.search);
      });
    }
  },
  methods: {
    toDetail: function(list) {
      this.$router.push({
        path: "/singleblog",
        query: {
          id: list.id,
          name: list.title
        }
      });
    }
  }
};
</script>

<style scoped>
#showblog {
  max-width: 800px;
  margin: 0 auto;
}
.connent {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
input {
  padding: 8px;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #444;
}
</style>
