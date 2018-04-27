<template>
  <div class="changePwd">
    <div class="title">
      <img src="../../assets/left_nav01.jpg" alt="">
      <h1>修改密码</h1>
    </div>
    <ul class="content">
      <li><label>旧密码：</label><input type="text" name="oldPwd" placeholder="旧密码" v-model="oldPwd"></li>
      <li><label>新密码：</label><input type="password" name="newPwd" placeholder="新密码" v-model="newPwd"></li>
      <li><label>确认密码：</label><input type="password" name="confirmPwd" placeholder="确认密码" v-model="confirmPwd"></li>
      <li><input type="button" name="" value="提交" @click="upload"></li>
    </ul>
    <p style="text-align:center;color:red;">{{errorInfo}}</p>
  </div>
</template>

<script>
import axios from  'axios'
export default {
  name: 'changePwd',
  data(){
    return {
      oldPwd:'',  //旧密码
      newPwd:'', //新密码
      confirmPwd:'',  //确认密码
      errorInfo:''
    }
  },
  methods:{
      upload(){
        var username = getCookie('username');
        if(this.newPwd === this.confirmPwd){
          axios.get('./static/php/login.php?opeartion=update&username='+username+'&password='+this.newPwd+'&oldPwd='+this.oldPwd).then((res)=>{
            console.log(typeof res.data);
            console.log(res.data);
            if(res.data == 1){
              window.open('./login.html',"_self");
            }else{
              this.errorInfo = '旧密码输入不正确！！！';
            }
          });
        }else{
          this.errorInfo = '两次密码输入不正确！！！';
        }
    }
  }
}
//获取cookie的值
function getCookie(name){
    var cookieName = name+'=';
    var cookieStart = document.cookie.indexOf(cookieName);
    var cookieEnd = null;
    var cookieValue =null;

    if(cookieStart > -1){
        cookieEnd = document.cookie.indexOf(';',cookieStart);
        if(cookieEnd === -1){
            cookieEnd = document.cookie.length;
        }
        cookieValue = document.cookie.substring(cookieStart+cookieName.length,cookieEnd);
    }

    return cookieValue;

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
      &:last-child{
        input{
          flex-shrink:0;
          padding:5px 0;
          width:200px;
          font-size:14px;
          text-indent:0;
          color:#fff;
          border:1px solid #ccc;
          border-radius:5px;
          background:#b60404;
          cursor:pointer;
          @media only screen and (max-width:300px){
            width:150px;
          }
        }
      }
    }
  }/*content*/
  @media only screen and (max-width:1200px){
    width:98%;
  }
}/*changePwd*/
</style>
