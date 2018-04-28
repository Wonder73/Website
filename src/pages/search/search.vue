<template>
  <div id="search">
    <vueHeader></vueHeader>
    <img src="../../assets/banner2.jpg" alt="">
    <div class="search">
      <div class="title">
        <img src="../../assets/left_nav01.jpg" alt="">
        <h1>搜索结果</h1>
      </div>
      <ul class="content">
        <li v-for="(value,index) in allNews" v-if="(index<maxpager && index>=minpager)"><span><a href="0">{{value.title}}</a></span><span>{{(value.date).split(" ")[0]}}</span></li>
        <li v-show="allNews.length===0" style="text-align:center;justify-content:center;background:none;">暂无搜索记录</li>
      </ul><!--ul.content-->
      <el-pagination
        background
        @current-change="handleSizeChange"
        layout="prev,pager,next,total,jumper"
        :page-size="this.pagerSize"
        :total="allNews.length"
        pager-count="5"
      ></el-pagination>
      <span class="loading" @click="loading($event)">加载更多...</span>
    </div><!--search-->
    <vueFooter></vueFooter>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
import vueHeader from '../../components/Header.vue';
import vueFooter from '../../components/Footer.vue';
export default {
  name: 'search',
  mounted(){
    var search = window.location.search.split('=')[1];
    axios.get('./static/php/news.php?opeartion=search&search='+search).then((res)=>{
      var data = JSON.stringify(res.data);
      // console.log(data.replace('/\\\"/g','\''));
      // console.log(typeof data);
      // console.log(typeof JSON.parse(data));
      this.allNews = JSON.parse(data);
      // this.allNews=res.data;
    });
  },
  data(){
    return {
      pagerCount:0,
      pagerSize:15,       //一页显示的最大数据
      clickNum:1,        //点击加载更多的次数
      allNews:''        //用于存放搜索的数据
    }
  },
  components:{
    vueHeader,
    vueFooter
  },
  computed:{
    maxpager:function (){   //最大的范围
      return this.pagerCount*this.pagerSize+this.pagerSize*this.clickNum
    },
    minpager:function (){   //最小的范围
      return this.pagerCount*this.pagerSize
    }
  },
  methods:{
    handleSizeChange(val){
      this.pagerCount = val-1;
    },
    loading(e){      //加载更多
      if(Math.ceil(this.allNews.length/this.pagerSize) <= ++this.clickNum){
        e.target.innerHTML="加载完毕"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#search {
  width:100%;
  &>img{
    width:100%;
    height:auto;
  }
  .search{
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
    ul.content{
      margin:10px 0;
      width:100%;
      li{
        display:flex;
        justify-content:space-between;
        padding:15px 10px;
        border-bottom:1px dashed #ccc;
        background:url(../../assets/icon1.png) center left no-repeat;
        span{
          &:last-child{
            width:108px;
            flex-shrink: 0;
            font-size:14px;
            color:#666;
            @media only screen and (max-width:600px){
              font-size:14px;
            }
          }
          &:first-child{
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
            width:70%;
            a{
              color:#000;
              &:hover{
                color:#b60404;
              }
            }
            @media only screen and (max-width:600px){
              font-size:14px;
            }
          }
        }
      }
    }/*ul.content*/
    .loading{
      border:1px solid;
      display:none;
      padding:5px 0;
      width:100%;
      font-size:14px;
      color:#fff;
      text-align:center;
      letter-spacing:2px;
      background:#b60404;
      @media only screen and(max-width:500px){
        display:block;
      }
    }
    @media only screen and (max-width:1200px){
      width:98%;
    }
  }/*search*/
}
</style>
<style lang="scss">
.el-pagination{
  display:flex;
  justify-content:flex-end;
  @media only screen and(max-width:500px){
    display:none;
  }
}
.el-pagination.is-background .el-pager li:not(.disabled).active{
  background:#b60404 !important;
}
</style>
