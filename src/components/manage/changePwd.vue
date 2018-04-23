<template>
  <div class="changePwd">
    <div class="title">
      <img src="../../assets/left_nav01.jpg" alt="">
      <h1>修改密码</h1>
    </div>
    <ul class="content">
      <li><label>旧密码：</label><input type="text" name="oldPwd" placeholder="旧密码"></li>
      <li><label>新密码：</label><input type="text" name="newPwd" placeholder="新密码"></li>
      <li><label>确认密码：</label><input type="text" name="confirmPwd" placeholder="确认密码"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'changePwd',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.changePwd{
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
      display:flex;
      justify-content: center;
      margin:0 auto;
      padding:5px 0;
      label{
        flex-shrink:0;
        padding:5px 0;
        width:80px;
        font-size:14px;
        text-align:right;
      }
      input{
        flex-shrink:0;
        padding:5px 0;
        width:200px;
        font-size:14px;
        text-indent:14px;
        border:1px solid #ccc;
        border-radius:5px;
        @media only screen and (max-width:300px){
          width:150px;
        }
      }
    }
  }/*content*/
  @media only screen and (max-width:1200px){
    width:98%;
  }
}/*changePwd*/
</style>
