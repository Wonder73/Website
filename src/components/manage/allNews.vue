<template>
  <div class="institution">
    <div class="news">
      <div class="title">
        <img src="../../assets/left_nav01.jpg" alt="">
        <h1>全部新闻</h1>
      </div>
      <ul class="content">
        <li v-for="(value,index) in allNews" v-if="(index<maxpager && index>=minpager)">
          <span><a :href="'./detail.html?id='+value.id">{{value.title}}</a></span><span>{{value.date.split(" ")[0]}}</span>
          <el-button-group style="width:88px;flex-shrink:0;">
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="jumper(value.id)"></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteNews(value.id,index)"></el-button>
        </el-button-group>
      </li>
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
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
export default {
  name:'institution',
  created(){
    this.$store.dispatch('getNews');
  },
  data(){
    return {
      pagerCount:0,     //   分页页码
      pagerSize:15,    //一页显示几条数据
      clickNum:1       //点击加载更多的次数
    }
  },
  computed:{
    ...mapGetters(['allNews']),
    maxpager:function (){         //最大范围
      return this.pagerCount*this.pagerSize+this.pagerSize*this.clickNum
    },
    minpager:function (){    //最小范围
      return this.pagerCount*this.pagerSize
    }
  },
  methods:{
    handleSizeChange(val){
      this.pagerCount = val-1;
    },
    loading(e){     //加载更多
      if(Math.ceil(this.allNews.length/this.pagerSize) <= ++this.clickNum){
        e.target.innerHTML="加载完毕"
      }
    },
    deleteNews(id,index){   //删除数据
      axios.get('./static/php/news.php?opeartion=delete&id='+id).then((res)=>{
        if(res.data){
          alert("删除成功！！！");
          this.$store.dispatch('deleteNews',{index:index});
        }
      });
    },
    jumper(index){     //跳转到编辑路由
      this.$router.push({name:'publish',params:{"articleId":index}});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.institution{
  width:1200px;
  margin:10px auto;
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
        align-items:center;
        padding:15px 10px;
        border-bottom:1px dashed #ccc;
        background:url(../../assets/icon1.png) center left no-repeat;
        span{
          &:nth-last-child(2){
            width:108px;
            flex-shrink: 0;
            font-size:14px;
            color:#666;
            @media only screen and (max-width:600px){
              font-size:12px;
            }
            @media only screen and (max-width:400px){
              display:none;
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
    }/*loading*/
    @media only screen and (max-width:1200px){
      width:98%;
    }
  }/*news*/
}/*institution*/
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
