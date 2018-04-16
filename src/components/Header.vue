<template lang="html">
  <div id="header" class="document-width">
    <div class="logo">
      <img src="../assets/logo.png" alt="">
      <div class="search">
        <input type="text" name="" value=""><el-button class="search-button el-icon-search" size="small"></el-button>
      </div>
    </div>
    <div class="nav">
      <ul class="pc-menu">
        <li><a href="./index.html">学院首页</a></li>
        <li>机构设置</li>
        <li>团务知识</li>
        <li><a href="./news.html">新闻动态</a></li>
        <li>《理工青年》</li>
        <li>励志故事</li>
      </ul>
      <div class="phone-menu">
        <img src="../assets/menu.png" alt="" @click="phoneShow=!phoneShow">
        <transition name="phoneSlide">
          <ul v-show="phoneShow">
            <li>学院首页</li>
            <li>机构设置</li>
            <li>团务知识</li>
            <li>新闻动态</li>
            <li>《理工青年》</li>
            <li>励志故事</li>
          </ul>
      </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      phoneShow:false
    }
  }
}
</script>

<style lang="scss" scoped>
#header{
  // border:1px solid;
  margin:0 auto;
  width:100%;
  /*logo*/
  .logo{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:0 auto;
    width:1200px;
    height:110px;
    background:url(../assets/bg.jpg) right no-repeat;
    z-index:998;
    img{
      max-width:100%;
      height:auto;
    }
    .search{
      display:flex;
      margin-top:30px;
      width:250px;
      input{
        font-size:14px;
        color:#333;
        text-indent:8px;
        border:1px solid #ccc;
        border-right:none;
        border-radius:3px 0 0 3px;
      }
      .search-button{
        font-wieght:bold;
        color:#fff;
        background:#b60e0e;
        border:1px solid #b60404;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }/*.search-button*/
      @media only screen and(max-width:700px){
        display:none;
      }
    }/*.search*/
    @media only screen and(max-width:1200px){
      width:100%;
    }
    @media only screen and(max-width:700px){
      justify-content:center;
    }
    @media only screen and(max-width:400px){
      background-position:center;
    }
    @media only screen and(max-width:500px){
      padding:10px 0;
      height:auto;
    }
  }/*.logo*/
  /*导航*/
  .nav{
    z-index:997;
    width:100%;
    height:40px;
    background:#b60404;
    /*电脑菜单*/
    ul.pc-menu{
      display:flex;
      align-items:stretch;
      margin:0 auto;
      width:1200px;
      height:100%;
      li{
        flex:1;
        font-size:16px;
        color:#fff;
        text-align:center;
        line-height:40px;
        cursor:pointer;
        a{
          display:block;
          width:100%;
          height:100%;
          color:#fff;
          &:hover{
            color:#b60404;
            background:#fff;
          }
        }
        &:hover{
          color:#b60404;
          background:#fff;
        }
      }
      @media only screen and(max-width:1200px){
        width:100%;
      }
      @media only screen and(max-width:600px){
        display:none;
      }
    }/*.pc-menu*/
    /*手机菜单*/
    div.phone-menu{
      z-index:990;
      position:relative;
      display:none;
      justify-content:center;
      align-items:center;
      width:100%;
      height:100%;
      img{
        width:24px;
        height:20px;
      }
      ul{
        z-index:980;
        position:absolute;
        overflow:hidden;
        // display:none;
        top:100%;
        width:100%;
        background:#b60404;
        li{
          width:100%;
          height:40px;
          font-size:14px;
          color:#fff;
          line-height:40px;
          text-align:center;
          border-bottom:1px solid #a90808;
          &:first-child{
            border-top:1px solid #a90808;
          }
        }
      }
      @media only screen and(max-width:600px){
        display:flex;
      }
    }/*phone-menu*/
    @media only screen and(max-width:400px){
      height:30px;
    }
  }/*.nav*/
}/*#header*/
/*手机菜单的动画*/
.phoneSlide-enter-active,.phoneSlide-leave-active{
  transition:all .5s;
}
.phoneSlide-enter,.phoneSlide-leave-to{
  height:0;
}
.phoneSlide-leave,.phoneSlide-enter-to{
  height:240px;
}
</style>
