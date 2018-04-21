<template>
  <div id="demo">
    <div id="editor" style="width:100%;"></div>
    <button type="button" name="button" @click="gettext">点击</button>
    <identify @identify="showMsg"></identify>
    {{identify}}
  </div>
</template>

<script>
import identify from '../../components/identify.vue';
export default {
  name: 'demo',
  data(){
    return {
      editor:null,
      identify:''
    }
  },
  components:{
    identify
  },
  mounted(){
    this.editor = UE.getEditor('editor');
  },
  methods:{
    gettext(){
      console.log(this.editor.getContent());
    },
    showMsg(identify){
      this.identify = identify;
    }
  },
  destroyed(){
    this.editor.destroy();
  }
}
</script>

<style lang="scss" scoped>
#demo{

}

</style>
