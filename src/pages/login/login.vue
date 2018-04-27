<template lang="html">
  <div class="login">
    <img src="../../assets/logo.png" alt="">
    <div class="user"><i class="fa fa-user" for="username"></i><input type="text" placeholder="用户名" v-model="username" id="username"></div>
    <div class="password error"><i class="fa fa-lock" for="password"></i><input type="password" placeholder="用户密码" v-model="password" id="password"></div>
    <div class="identify" v-show="count>=5"><input type="text" placeholder="验证码" v-model="identifyNumber"><identify @identify="showMsg"></identify></div>
    <p style="color:red;text-align:center;">{{errorInfo}}</p>
    <input type="button" name="" value="登录" @click="login">
  </div>
</template>

<script>
import identify from '../../components/identify.vue';
import axios from 'axios';
export default {
  data(){
    return {
      identifyNum:'',
      count:0,   //记录错误的次数
      username:'',
      password:'',
      identifyNumber:'',
      errorInfo:''
    }
  },
  methods:{
    showMsg(identigy){
      this.identifyNum=identigy.toLowerCase();
    },
    login(){
      if(this.count < 5 || this.identifyNum === this.identifyNumber.toLowerCase()){
        axios.get('./static/php/login.php?opeartion=login&username='+this.username+'&password='+this.password).then((res)=>{
          if(res.data == '1'){
            document.cookie='username='+this.username;
            document.cookie='password='+this.password;
            window.open('./manage.html',"_self");
            this.count = 0;
            this.errorInfo="";
          }else{
            this.count++;
            if(this.username && this.password){
              this.errorInfo="用户名或密码错误！！！";
            }else{
              this.errorInfo="用户名或密码不能为空！！！";
            }
          }
        });
      }else{
        this.errorInfo="验证码输入错误！！！";
      }
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
    // display:none;
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
