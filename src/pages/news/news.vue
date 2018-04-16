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
        <li><span><a href="0">学校召开2018年学生工作会议学校召开2018年学生工作会议学校召开2018年学生工作会议学校召开2018年学生工作会议学校召开2018年学生工作会议学校召开2018年学生工作会议学校召开2018年学生工作会议学校召开2018年学生工作会议学校召开2018年学生工作会议学校召开2018年学生工作会议</a></span><span>2018年04月16日</span></li>
        <li><span><a href="0">学校召开2018年学生工作会议</a></span><span>2018年04月16日</span></li>
        <li><span><a href="0">学校召开2018年学生工作会议</a></span><span>2018年04月16日</span></li>
        <li><span><a href="0">学校召开2018年学生工作会议</a></span><span>2018年04月16日</span></li>
        <li><span><a href="0">学校召开2018年学生工作会议</a></span><span>2018年04月16日</span></li>
        <li><span><a href="0">学校召开2018年学生工作会议</a></span><span>2018年04月16日</span></li>
        <li><span><a href="0">学校召开2018年学生工作会议</a></span><span>2018年04月16日</span></li>
        <li><span><a href="0">学校召开2018年学生工作会议</a></span><span>2018年04月16日</span></li>
        <li><span><a href="0">学校召开2018年学生工作会议</a></span><span>2018年04月16日</span></li>
        <li><span><a href="0">学校召开2018年学生工作会议</a></span><span>2018年04月16日</span></li>
        <li><span><a href="0">学校召开2018年学生工作会议</a></span><span>2018年04月16日</span></li>
        <li><span><a href="0">学校召开2018年学生工作会议</a></span><span>2018年04月16日</span></li>
        <li><span><a href="0">学校召开2018年学生工作会议</a></span><span>2018年04月16日</span></li>
        <li><span><a href="0">学校召开2018年学生工作会议</a></span><span>2018年04月16日</span></li>
        <li><span><a href="0">学校召开2018年学生工作会议</a></span><span>2018年04月16日</span></li>
      </ul><!--ul.content-->
      <ul class="list">
        <li><i class="el-icon-arrow-left"></i></li>
        <li>1</li>
        <li>...</li>
        <li>3</li>
        <li class="active">4</li>
        <li>5</li>
        <li>...</li>
        <li>100</li>
        <li><i class="el-icon-arrow-right"></i></li>
        <li><input type="text" value="0"></li>
        <li>跳转</li>
      </ul>
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
  components:{
    vueHeader,
    vueFooter
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
    ul.list{
      display:flex;
      justify-content:center;
      li{
        display:flex;
        justify-content: center;
        align-items:center;
        margin:0 2px;
        width:35px;
        height:35px;
        font-size:14px;
        color:#333;
        border:1px solid #b60404;
        border-radius:8px;
        cursor:pointer;
        &:nth-last-child(2){
          overflow:hidden;
          input{
            text-align:center;
            border:none;
            width:100%;
            height:100%;
          }
        }/*nth-last-child(2)*/
        &:hover{
          color:#b60404;
        }
        &.active{
          color:#fff;
          background:#b60404;
        }/*active*/
        @media only screen and (max-width:500px){
          width:30px;
          height:30px;
        }
      }/*li*/
    }/*ul.list*/
    @media only screen and (max-width:1200px){
      width:98%;
    }
  }/*news*/
}
</style>
