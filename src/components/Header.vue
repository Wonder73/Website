<template lang="html">
  <div id="header" class="document-width">
    <div class="logo">
      <img src="../assets/logo.png" alt="">
      <div class="search">
        <input type="text" name="" v-model="searchValue" @focus="showSearch" @blur="blurSearch" @keydown="selectSearch"><span class="search-button el-icon-search" size="small" @click="search"><a :href="searchSrc"></a></span>
        <ul class="slideSearch" v-show="flag">
          <li v-for="(value,index) of historySearch" :key="index" :class="{active:index === count}" @click="searchValue = value"><a href="#" @click="searchValue = value">{{value}}</a></li>
          <li v-show="!historySearch.length"><a href="#">暂无历史记录</a></li>
          <li @click="clearSearch" v-show="historySearch.length"><a href="#" @click="clearSearch">清除记录</a></li>
        </ul>
      </div>
    </div>
    <div class="nav">
      <ul class="pc-menu">
        <li><a href="./index.html">学院首页</a></li>
        <li><a href="./institution.html">机构设置</a></li>
        <li><a href="./lore.html">团务知识</a></li>
        <li><a href="./news.html">新闻动态</a></li>
        <li>《理工青年》</li>
        <li>励志故事</li>
      </ul>
      <div class="phone-menu">
        <img src="../assets/menu.png" alt="" @click="phoneShow=!phoneShow">
        <transition name="phoneSlide">
          <ul v-show="phoneShow">
            <li><a href="./index.html">学院首页</a></li>
            <li><a href="./institution.html">机构设置</a></li>
            <li><a href="./lore.html">团务知识</a></li>
            <li><a href="./news.html">新闻动态</a></li>
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
      phoneShow:false,
      searchValue:'',   //搜索框数据的双向绑定
      historySearch:[],  //历史搜索记录
      flag:false,      //下拉搜索框的显示
      count:-1
    }
  },
  computed:{
    searchSrc(){    //搜索跳转的地址
      return './search.html?search='+this.searchValue;
    }
  },
  methods:{
    search(){        //点击搜索后
      var searchValue = localStorage.searchValue?JSON.parse(localStorage.searchValue):[];
      if(searchValue.indexOf(this.searchValue) < 0){
        if(searchValue.length >= 5){
          searchValue.shift();
        }
        searchValue.push(this.searchValue);
        localStorage.searchValue = JSON.stringify(searchValue);
        console.log(localStorage.searchValue);
      }
    },
    showSearch(){       //获得焦点时显示
      this.flag=true;
      this.historySearch = localStorage.searchValue?JSON.parse(localStorage.searchValue).reverse():[];
    },
    blurSearch(){     //失去焦点时隐藏
      setTimeout(()=>{
        this.flag=false;
        this.count=-1;
      },100);
    },
    selectSearch(e){   //搜索列表选择某一条数据
      var keyCode = e.keyCode;
      var length = this.historySearch.length;
      if(keyCode === 38){
        if(--this.count < 0 ){
          this.count = length-1;
        }
        this.searchValue = this.historySearch[this.count];
      }else if(keyCode === 40){
        if(++this.count >= length){
          this.count = 0;
        }
        this.searchValue = this.historySearch[this.count];
      }
    },
    clearSearch(){     //清除搜索记录
      this.historySearch = [];
      localStorage.clear('searchValue');
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
      position:relative;
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
        position:relative;
        width:44px;
        height:32px;
        text-align:center;
        font-weight:bold;
        line-height:32px;
        color:#fff;
        background:#b60e0e;
        border:1px solid #b60404;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-radius:0 3px 3px 0;
        a{
          position:absolute;
          top:0;
          left:0;
          display:block;
          width:100%;
          height:100%;
        }
      }/*.search-button*/
      .slideSearch{
        position:absolute;
        top:97%;
        width:214px;
        background:#fff;
        border:1px solid #ccc;
        border-top:none;
        border-radius:0 0 5px 5px;
        li{
          padding:8px 0;
          font-size:14px;
          text-indent:14px;
          &.active,&:hover{
            background:#b60404;
            a{
              color:#fff;
            }
          }
          a{
            display:block;
            width:100%;
            height:100%;
            color:#333;
          }
        }
        z-index:2;
      }/*slideSearch*/
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
