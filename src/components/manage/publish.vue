<template>
  <div class="publish">
    <div class="title">
      <img src="../../assets/left_nav01.jpg" alt="">
      <h1>发表动态</h1>
    </div>
    <ul class="content">
      <li><label for="title">标　　题：</label><input type="text" id="title" name="title" placeholder="标题" v-model="title"><span>*输入标题，但是不要过长</span></li>
      <li><label for="author">作　　者：</label><input type="text" id="author" name="author" placeholder="作者" v-model="author"><span>*输入作者，如果有多个作者请用逗号分隔。如：张三，李四，王五</span></li>
      <li><label>发表时间：</label><el-date-picker size="small" placeholder="选择日期时间" type="datetime" v-model="datetime"></el-date-picker></li>
      <li><div id="editor" style="width:100%;"></div></li>
      <li><el-button type="primary" icon="el-icon-upload" size="small">发表</el-button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'publish',
  data(){
    return {
      editor:null,
      datetime:'',    //时间
      title:'',       //标题
      author:''      //作者
    }
  },
  mounted(){
    this.editor = UE.getEditor('editor',{
        initialFrameHeight: 400
    });
  },
  destroyed(){
    this.editor.destroy();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.publish{
  width:1200px;
  margin:10px auto;
  .title{
    display:flex;
    align-items:center;
    padding:10px 0 0 0;
    border-bottom:2px solid #b60404;
    img{
      max-width:100%;
      height:auto;
      @media only screen and (max-width:400px){
        width:140px;
      }
    }
    h1{
      display:block;
      flex:1;
      padding:0 10px;
      height:100%;
      font-size:20px;
      font-weight:bold;
      color:#b60404;
      @media only screen and (max-width:500px){
        font-size:16px;
        letter-spacing:2px;
      }
    }
  }/*title*/
  .content{
    padding:10px 0;
    li{
      padding:10px 0;
      label{
        font-size:14px;
        letter-spacing:2px;
      }
      input{
        margin:5px 0;
        width:40%;
        height:32px;
        font-size:14px;
        text-indent:14px;
        border:1px solid #ccc;
        border-radius:5px;
        &::-webkit-input-placeholder{
          color:#ccc;
        }
      }
      .el-date-editor{
        width:40%;
        height:20px;
        border:none;;
        input.el-input__inner{
          width:100%;
          height:100%;
        }
      }
      span{
        margin-left:10px;
        font-size:14px;
        line-height:1.5;
        color:red;
      }
    }/*li*/
  }/*content*/
  @media only screen and (max-width:1200px){
    width:98%;
  }
}/*publish*/
</style>
