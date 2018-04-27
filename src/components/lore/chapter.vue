<template>
  <div id="chapter">
    <div class="chapter">
      <div class="title">
        <img src="../../assets/left_nav01.jpg" alt="">
        <h1>理工新闻</h1>
      </div>
      <ul class="content">
        <li>总则</li>
        <li><a href="http://www1.gdpi.edu.cn/cms/tw/twzs/tz/188qkf2hfqnft.xhtml">第一章　团员</a></li>
        <li><a href="http://www1.gdpi.edu.cn/cms/tw/twzs/tz/188qkf2h7i7lh.xhtml">第二章　团的组织制度</a></li>
        <li><a href="http://www1.gdpi.edu.cn/cms/tw/twzs/tz/188qkf2h1dd4.xhtml">第三章　团的中央组织</a></li>
        <li><a href="http://www1.gdpi.edu.cn/cms/tw/twzs/tz/188qkf2gq8c0o.xhtml">第四章　团的地方和军队的组织</a></li>
        <li><a href="http://www1.gdpi.edu.cn/cms/tw/twzs/tz/188qkf2gd7lhj.xhtml">第五章　团的基层组织</a></li>
        <li><a href="http://www1.gdpi.edu.cn/cms/tw/twzs/tz/188qkf2g65tc8.xhtml">第六章　团的干部</a></li>
        <li><a href="http://www1.gdpi.edu.cn/cms/tw/twzs/tz/188qkf2g65tc8.xhtml">第七章　团旗、团徽、团歌、团员证</a></li>
        <li><a href="http://www1.gdpi.edu.cn/cms/tw/twzs/tz/188qkf2fphppa.xhtml">第八章　团的经费</a></li>
        <li><a href="http://www1.gdpi.edu.cn/cms/tw/twzs/tz/188qkf2fibmli.xhtml">第九章　团同少年先锋队的关系</a></li>
      </ul><!--ul.content-->
    </div><!--chapter-->
  </div>
</template>

<script>
import vueHeader from '../../components/Header.vue';
import vueFooter from '../../components/Footer.vue';
export default {
  name: 'chapter',
}
</script>

<style lang="scss" scoped>
#chapter {
  width:100%;
  &>img{
    width:100%;
    height:auto;
  }
  .chapter{
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
        a{
          color:#222;
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
  }/*chapter*/
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
