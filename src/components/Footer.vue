<template lang="html">
  <div class="footer">
    <p><span>版权 © 广东理工职业学院团委</span> <span>联系电话：<i>020-83501532 0765-89911501</i></span> <span>团委邮箱：xtw@gdrtvu.edu.cn</span></p>
    <p><span>广州校本部地址：<i>广州市越秀区下塘西路3号</i></span> <span>邮编：510091</span></p>
    <p><span>中山校区地址：<i>广东省中山市五桂山职业教育园区</i></span> <span>邮编：528458</span><a href="./login.html">登录</a></p>
    <transition name="fade">
      <div class="go_top" @click="goTop" v-show="showGoTop"><i class="el-icon-arrow-up"></i></div>
    </transition>
  </div>
</template>

<script>
export default {
  mounted(){
    window.addEventListener('scroll',()=>{
      if(document.documentElement.scrollTop > 0){
        this.showGoTop = true;
      }else{
        this.showGoTop = false;
      }
    });
  },
  data(){
    return {
      showGoTop:false
    }
  },
  methods:{
    goTop(){    //回顶部
      // var scrollTop = document.documentElement.scrollTop;
      var i = 0;
      var timer = setInterval(()=>{
        document.documentElement.scrollTop -=i++;
        if(document.documentElement.scrollTop <= 0){
          clearInterval(timer);
        }
      },10);
    }
  }
}
</script>

<style lang="scss" scoped>
.footer{
  padding:10px 0;
  width:100%;
  min-height:10px;
  font-size:14px;
  color:#eee;
  text-align:center;
  line-height:1.5;
  background:#b60404;
  p{
    display:block;
    width:100%;
    &:nth-child(1){
      span{
        display:inline-block;
        &:nth-child(1){width:187px;}
        &:nth-child(2){i{display:inline-block;width:200px;}}
        &:nth-child(3){width:191px;}
      }
    }
    &:nth-child(2){
      span{
        display:inline-block;
        &:nth-child(1){i{display:inline-block;width:170px;}}
        &:nth-child(2){width:90px;}
      }
    }
    &:nth-child(3){
      span{
        display:inline-block;
        &:nth-child(1){i{display:inline-block;width:211px;}}
        &:nth-child(2){width:90px;}
      }
    }
    a{
      margin:0 10px;
      font-size:12px;
      color:#fff;
      letter-spacing:2px;
    }
  }
  .go_top{
    position:fixed;
    top:80%;
    right:3%;
    display:flex;
    justify-content: center;
    align-items:center;
    width:30px;
    height:30px;
    border:2px solid #b60404;
    border-radius:5px;
    z-index:19;
    cursor:pointer;
    i{
      color:#b60404;
    }
  }

  /*动画*/
  .fade-enter-active,.fade-leave-active{
    transition:opacity 0.5s;
  }
  .fade-enter,.fade-leave-to{
    opacity:0;
  }
  .fade-leave,fade-enter-to{
    opacity:1;
  }
}/*footer*/
</style>
