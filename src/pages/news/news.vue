<template>
  <div id="news">
    <vueHeader></vueHeader>
    <img src="../../assets/banner2.jpg" alt="">
    <div class="news">
      <div class="title">
        <img src="../../assets/left_nav01.jpg" alt="">
        <h1>理工新闻</h1>
      </div>
      <ul class="content">
        <li v-for="(value,index) in allNews" v-if="(index<maxpager && index>=minpager)"><span><a :href="'./detail.html?id='+value.id">{{value.title}}</a></span><span>{{(value.date).split(" ")[0]}}</span></li>
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
    </div><!--news-->
    <vueFooter></vueFooter>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import vueHeader from '../../components/Header.vue';
import vueFooter from '../../components/Footer.vue';
export default {
  name: 'news',
  created(){
    this.$store.dispatch('getNews');
  },
  data(){
    return {
      pagerCount:0,
      pagerSize:15,    //一页显示多少条数据
      clickNum:1        //点击加载更多的次数
    }
  },
  components:{
    vueHeader,
    vueFooter
  },
  computed:{
    ...mapGetters(['allNews']),
    maxpager:function (){     //最大范围
      return this.pagerCount*this.pagerSize+this.pagerSize*this.clickNum
    },
    minpager:function (){   //最小范围
      return this.pagerCount*this.pagerSize
    }
  },
  methods:{
    handleSizeChange(val){
      this.pagerCount = val-1;
    },
    loading(e){     //点击加载更多
      if(Math.ceil(this.allNews.length/this.pagerSize) <= ++this.clickNum){
        e.target.innerHTML="加载完毕"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#news {
  width:100%;
  &>img{
    width:100%;
    height:auto;
  }
  .news{
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
  }/*news*/
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
