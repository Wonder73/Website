<!--机构简介-->
<template>
  <div id="institution">
    <vueHeader></vueHeader>
    <img src="../../assets/banner2.jpg" alt="">
    <div class="institution">
      <ul class="option">
        <router-link to="/allNews" tag="li">全部新闻</router-link>
        <router-link to="/publish" tag="li">发表动态</router-link>
        <router-link to="/changePwd" tag="li">修改密码</router-link>
      </ul>
      <router-view></router-view>
    </div><!--institution-->
    <vueFooter></vueFooter>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
import vueHeader from '../../components/Header.vue';
import vueFooter from '../../components/Footer.vue';
export default {
  name: 'institution',
  created(){
    var username = getCookie('username');
    var password = getCookie('password');
    axios.get('./static/php/login.php?opeartion=login&username='+username+'&password='+password).then((res)=>{
      if(res.data == '0'){
        window.open('./login.html',"_self");
      }
    });
  },
  components:{
    vueHeader,
    vueFooter
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

<style lang="scss" scoped>
#institution {
  width:100%;
  &>img{
    width:100%;
    height:auto;
  }
  .institution{
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
    ul.option{
      display:flex;
      li{
        padding:10px 15px;
        font-size:14px;
        letter-spacing:1px;
        cursor:pointer;
        &:hover{
          color:#b60404;
        }
        &.active{
          color:#fff;
          background:#b60404;
        }
      }
    }/*option*/
    @media only screen and (max-width:1200px){
      width:98%;
    }
  }/*news*/
}
</style>
