<template>
  <div class="hello">
     <editor id="editor_id" height="500px" width="700px" :content="editorText"
        pluginsPath="/static/kindeditor/plugins/"
        :loadStyleMode="false"
        @on-content-change="onContentChange"></editor>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
       editorText: ''
    }
  },
  methods: {
    onContentChange (val) {
      this.editorText = val
    }
  }
}
</script>
