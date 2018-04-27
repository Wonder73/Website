<!--机构简介-->
<template>
  <div id="lore">
    <vueHeader></vueHeader>
    <img src="../../assets/banner2.jpg" alt="">
    <div class="lore">
      <ul class="option">
        <router-link to="/flag" tag="li">团旗</router-link>
        <router-link to="/emblem" tag="li">团徽</router-link>
        <router-link to="/song" tag="li">团歌</router-link>
        <router-link to="/chapter" tag="li">团章</router-link>
        <router-link to="/oath" tag="li">入团誓词</router-link>
      </ul>
      <router-view></router-view>
    </div><!--lore-->
    <vueFooter></vueFooter>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import vueHeader from '../../components/Header.vue';
import vueFooter from '../../components/Footer.vue';
export default {
  name: 'lore',
  components:{
    vueHeader,
    vueFooter
  }
}
</script>

<style lang="scss" scoped>
#lore {
  width:100%;
  &>img{
    width:100%;
    height:auto;
  }
  .lore{
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
