<template lang="html">
  <div class="login">
    <img src="../../assets/logo.png" alt="">
    <div class="user"><i class="fa fa-user"></i><input type="text" placeholder="用户名"></div>
    <div class="password"><i class="fa fa-lock"></i><input type="text" placeholder="用户密码"></div>
    <div class="identify"><input type="text" placeholder="验证码" :value="identifyNum"><identify></identify></div>
    <input type="button" name="" value="登录">
  </div>
</template>

<script>
import identify from '../../components/identify.vue'
export default {
  data(){
    return {
      identifyNum:''
    }
  },
  methods:{
    showMsg(identigy){
      this.identifyNum=identigy;
    }
  },
  components:{
    identify
  }
}
window.onload = function (){
  center();
  window.addEventListener('resize',function (){
    center();
  },false);
  function center(){
    var clientWidth = document.documentElement.clientWidth;
    var clientHeight = document.documentElement.clientHeight;
    var login = document.getElementsByClassName('login')[0];
    var loginWidth = login.offsetWidth;
    var loginHeight = login.offsetHeight;
    login.style.left = (clientWidth-loginWidth)/2+'px';
    login.style.top = (clientHeight-loginHeight)/2+'px';
  }
}
</script>

<style lang="scss" scoped>
.login{
  position:fixed;
  width:400px;
  min-height:300px;
  // border:1px solid;
  div{
    overflow:hidden;
    display:flex;
    align-items: center;
    margin:10px auto;
    width:300px;
    height:34px;
    border:2px solid #fff;
    border-radius:10px;
    i{
      flex-shrink:0;
      margin:0 10px;
      font-size:16px;
      color:#fff;
    }
    input{
      align-self: stretch;
      width:90%;
      font-size:14px;
      text-indent:14px;
      background:none;
    }
    input::-webkit-input-placeholder{
      color:#ddd;
      letter-spacing: 1px;
    }
    @media only screen and (max-width:300px){width:100%;}
  }
  &>input{
    align-self: stretch;
    flex:1;
    display:block;
    margin:16px auto;
    width:300px;
    height:34px;
    font-size:16px;
    font-weight:bold;
    letter-spacing:5px;
    background:#fff;
    border:2px solid #fff;
    border-radius:10px;
    cursor:pointer;
    @media only screen and (max-width:300px){width:100%;}
  }
  &>div.identify{
    display:none;
    input{
      width:60%;
      @media only screen and (max-width:300px){width:50%;}
    }
  }
  img{
    max-width:100%;
  }
  @media only screen and (max-width:400px){width:100%;}
}
</style>
