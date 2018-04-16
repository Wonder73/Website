<template>
  <div id="app">
    <vueHeader></vueHeader>
    <div class="lunbo">
      <swiper :options="swiperOption" ref="mySwiper">
       <!-- slides -->
       <swiper-slide v-for="banner of banners" :key="banner"><img :src="banner" alt="我是banner"></swiper-slide>

       <!-- Optional controls -->
       <div class="swiper-pagination"  slot="pagination"></div>
       <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
       <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
    </div><!--lunbo-->
    <div class="news">
      <div class="title"><img src="../../assets/news.png"><h1>新闻动态</h1><span>更多+</span></div>
      <div class="content">
        <div class="news-img">
          <swiper :options="swiperOption2" ref="mySwiper">
           <!-- slides -->
           <swiper-slide v-for="n of news" :key="n"><img :src="n" alt="我是banner"></swiper-slide>

           <!-- Optional controls -->
           <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div><!--news-img-->
        <div class="news-title">
          <ul>
            <li><a href="#" title="对标“四个走在全国前列”的殷殷嘱托：罗海鸥书记与理工学生谈“匠人匠心与快乐人生”">对标“四个走在全国前列”的殷殷嘱托：罗海鸥书记与理工学生谈“匠人匠心与快乐人生”对标“四个走在全国前列”的殷殷嘱托：罗海鸥书记与理工学生谈“匠人匠心与快乐人生”</a><span>04-12</span></li>
            <li><a href="#" title="对标“四个走在全国前列”的殷殷嘱托：罗海鸥书记与理工学生谈“匠人匠心与快乐人生”">对标“四个走在全国前列”的殷殷嘱托：罗海鸥书记与理工学生谈“匠人匠心与快乐人生”</a><span>04-12</span></li>
            <li><a href="#" title="对标“四个走在全国前列”的殷殷嘱托：罗海鸥书记与理工学生谈“匠人匠心与快乐人生”">对标“四个走在全国前列”的殷殷嘱托：罗海鸥书记与理工学生谈“匠人匠心与快乐人生”</a><span>04-12</span></li>
            <li><a href="#" title="对标“四个走在全国前列”的殷殷嘱托：罗海鸥书记与理工学生谈“匠人匠心与快乐人生”">对标“四个走在全国前列”的殷殷嘱托：罗海鸥书记与理工学生谈“匠人匠心与快乐人生”</a><span>04-12</span></li>
            <li><a href="#" title="对标“四个走在全国前列”的殷殷嘱托：罗海鸥书记与理工学生谈“匠人匠心与快乐人生”">对标“四个走在全国前列”的殷殷嘱托：罗海鸥书记与理工学生谈“匠人匠心与快乐人生”</a><span>04-12</span></li>
            <li><a href="#" title="对标“四个走在全国前列”的殷殷嘱托：罗海鸥书记与理工学生谈“匠人匠心与快乐人生”">对标“四个走在全国前列”的殷殷嘱托：罗海鸥书记与理工学生谈“匠人匠心与快乐人生”</a><span>04-12</span></li>
            <li><a href="#" title="对标“四个走在全国前列”的殷殷嘱托：罗海鸥书记与理工学生谈“匠人匠心与快乐人生”">对标“四个走在全国前列”的殷殷嘱托：罗海鸥书记与理工学生谈“匠人匠心与快乐人生”</a><span>04-12</span></li>
          </ul>
        </div><!--news-title-->
      </div><!--content-->
    </div><!--news-->
    <div class="other">
      <div class="notice">
        <div class="title"><img src="../../assets/news02.png"><h1>公告通知</h1><span>更多+</span></div>
        <ul class="content">
          <li><p class="date"><span>10-01</span><span>1001</span></p><a href="#" title="采购公告——广东开放大学(广东理工职业学院)数字媒体制作总控室及增补设备采购项目">采购公告采购公告采购公告采购公告——广东开放大学(广东理工职业学院)数字媒体制作总控室及增补设备采购项目</a></li>
          <li><p class="date"><span>10-01</span><span>1001</span></p><a href="#" title="采购公告——广东开放大学(广东理工职业学院)数字媒体制作总控室及增补设备采购项目">采购公告——广东开放大学(广东理工职业学院)数字媒体制作总控室及增补设备采购项目</a></li>
          <li><p class="date"><span>10-01</span><span>1001</span></p><a href="#" title="采购公告——广东开放大学(广东理工职业学院)数字媒体制作总控室及增补设备采购项目">采购公告——广东开放大学(广东理工职业学院)数字媒体制作总控室及增补设备采购项目</a></li>
          <li><p class="date"><span>10-01</span><span>1001</span></p><a href="#" title="采购公告——广东开放大学(广东理工职业学院)数字媒体制作总控室及增补设备采购项目">采购公告——广东开放大学(广东理工职业学院)数字媒体制作总控室及增补设备采购项目</a></li>
          <li><p class="date"><span>10-01</span><span>1001</span></p><a href="#" title="采购公告——广东开放大学(广东理工职业学院)数字媒体制作总控室及增补设备采购项目">采购公告——广东开放大学(广东理工职业学院)数字媒体制作总控室及增补设备采购项目</a></li>
          <li><p class="date"><span>10-01</span><span>1001</span></p><a href="#" title="采购公告——广东开放大学(广东理工职业学院)数字媒体制作总控室及增补设备采购项目">采购公告——广东开放大学(广东理工职业学院)数字媒体制作总控室及增补设备采购项目</a></li>
        </ul>
      </div><!--notice-->
      <div class="work">
        <div class="title"><img src="../../assets/news02.png"><h1>工作安排</h1><span>更多+</span></div>
        <ul class="content">
          <li><a href="#" title="校、系学生机构第六周主要工作安排">校、系学生机构第六周主要工作安排校、系学生机构第六周主要工作安排校、系学生机构第六周主要工作安排</a><span class="date''">1221-12-21</span></li>
          <li><a href="#" title="校、系学生机构第六周主要工作安排">校、系学生机构第六周主要工作安排</a><span class="date''">1221-12-21</span></li>
          <li><a href="#" title="校、系学生机构第六周主要工作安排">校、系学生机构第六周主要工作安排</a><span class="date''">1221-12-21</span></li>
          <li><a href="#" title="校、系学生机构第六周主要工作安排">校、系学生机构第六周主要工作安排</a><span class="date''">1221-12-21</span></li>
          <li><a href="#" title="校、系学生机构第六周主要工作安排">校、系学生机构第六周主要工作安排</a><span class="date''">1221-12-21</span></li>
          <li><a href="#" title="校、系学生机构第六周主要工作安排">校、系学生机构第六周主要工作安排</a><span class="date''">1221-12-21</span></li>
        </ul>
      </div><!--work-->
    </div><!--other-->
    <vueFooter></vueFooter>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {swiper,swiperSlide} from 'vue-awesome-swiper';
import vueHeader from '../../components/Header.vue';
import vueFooter from '../../components/Footer.vue';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import news1 from '../../assets/news1.jpg';
import news2 from '../../assets/news2.jpg';
import news3 from '../../assets/news3.jpg';
import news4 from '../../assets/news4.jpg';
export default {
  name: 'App',
  data(){
    return {
      banners:[banner1,banner2,banner3],
      news:[news1,news2,news3,news4],
      swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
            // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          // autoplay : true,
          autoplay:{
            delay:3000,
            disableOnInteraction:false
          },
          speed:1000,
          loop:true,
          autoHeight:true,
          // grabCursor:true,
          pagination: {
            el: '.swiper-pagination',
            clickable:true
          },
          navigation:{
            prevEl:'.swiper-button-prev',
            nextEl:'.swiper-button-next'
          }
       },
       swiperOption2:{
         notNextTick:true,
         autoplay:{delay:3000,disableOnInteraction:false},
         speed:1000,
         loop:true,
         autoHeight:true,
         pagination:{
           el:'.swiper-pagination',
           clickable:true,
         }
       }
    }
  },
  components:{
    vueHeader,
    vueFooter,
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
#app{
  width:100%;
  /*轮播图*/
  .lunbo{
    width:100%;
    .swiper-slide img{
      width:100%;
      height:auto;
    }
    .swiper-button-prev{
      margin-left:2%;
    }
    .swiper-button-next{
      margin-right:2%;
    }
  }
  /*新闻动态*/
  .news{
    margin:10px auto;
    width:1200px;
    .title{
      display:flex;
      align-items:center;
      padding:10px 0;
      width:100%;
      border-bottom:2px solid #b60404;
      img{
        max-width:100%;
        height:auto;
      }
      h1{
        flex:1;
        padding:0 10px;
        font-size:20px;
        font-weight:bold;
        color:#b60404;
        @media only screen and (max-width:500px){
          font-size:16px;
          letter-spacing:2px;
        }
      }
      span{
        font-size:12px;
        color:#666;
        cursor:pointer;
        &:hover{
          color:#b60404;
        }
      }
    }/*title*/
    .content{
      display:flex;
      padding:10px 0;
      width:100%;
      min-height:100px;
      .news-img{
        margin-right:10px;
        width:340px;
        min-height:100px;
        img{
          max-width:100%;
        }
        @media only screen and (max-width:800px){
          width:240px;
        }
        @media only screen and (max-width:500px){
          display:none;
        }
      }/*.news-img*/
      .news-title{
        flex:1;
        ul{
          display:flex;
          flex-flow:column;
          justify-content:space-around;
          align-items:stretch;
          width:100%;
          height:100%;
          li{
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex:1;
            width:100%;
            background:url(../../assets/news01.png) center left no-repeat;
            border-bottom:1px dashed #ccc;
            a{
              margin-left:20px;
              max-width:700px;
              font-size:14px;
              color:#000;
              white-space:nowrap;
              overflow:hidden;
              text-overflow:ellipsis;
              @media only screen and (max-width:1200px){
                max-width:560px;
              }
              @media only screen and (max-width:1000px){
                max-width:460px;
              }
              @media only screen and (max-width:900px){
                max-width:360px;
              }
              @media only screen and (max-width:800px){
                padding:5px 0;
                font-size:12px;
              }
              @media only screen and (max-width:700px){
                max-width:280px;
              }
              @media only screen and (max-width:600px){
                max-width:200px;
              }
              @media only screen and (max-width:530px){
                max-width:170px;
              }
              @media only screen and (max-width:500px){
                max-width:76%;
              }
            }/*a*/
            span{
              width:46px;
              font-size:14px;
              color:#666;
              @media only screen and (max-width:800px){
                font-size:12px;
              }
            }/*span*/
            @media only screen and (max-width:800px){
              &:last-child{display:none;}
            }
            @media only screen and (max-width:500px){
              padding:10px 0;
              &:last-child{display:flex;}
            }
            a{
              color:#000;
              &:hover{
                color:#b60404;
              }
            }
          }/*li*/
          @media only screen and (max-width:500px){
            padding:5px 0;
            width:100%;
          }
        }/*ul*/
        @media only screen and (max-width:500px){
          width:100%;
        }
      }/*.news-title*/
      @media only screen and (max-width:500px){
        flex-flow:column;
        justify-content:center;
        align-content:center;
        align-items:center;
      }
    }/*content*/
    @media only screen and (max-width:1200px){
      width:98%;
    }
  }/*news*/
  .other{
    display:flex;
    justify-content:space-between;
    align-items: stretch;
    margin:10px auto;
    width:1200px;
    div{
      flex:1;
      .title{
        display:flex;
        align-items:center;
        padding:10px 0;
        width:100%;
        border-bottom:2px solid #b60404;
        img{
          max-width:100%;
          height:auto;
        }
        h1{
          flex:1;
          padding:0 10px;
          font-size:20px;
          font-weight:bold;
          color:#b60404;
          @media only screen and (max-width:500px){
            font-size:16px;
            letter-spacing:2px;
          }
        }
        span{
          font-size:12px;
          color:#666;
          cursor:pointer;
          &:hover{
            color:#b60404;
          }
        }
      }/*title*/
      &.notice{
        margin-right:15px;
        ul{
          li{
            display:flex;
            align-items:center;
            border-bottom:1px dashed #ccc;
            a{
              width:544px;
              font-size:14px;
              color:#000;
              white-space:nowrap;
              overflow:hidden;
              text-overflow:ellipsis;
              @media only screen and (max-width:1200px){
                width:400px;
              }
              @media only screen and (max-width:1000px){
                width:360px;
              }
              @media only screen and (max-width:900px){
                width:300px;
              }
              @media only screen and (max-width:800px){
                width:260px;
              }
              @media only screen and (max-width:700px){
                width:98%;
              }
            }/*a*/
            p.date{
              display:flex;
              flex-flow:column;
              margin:5px 0;
              margin-right:10px;
              width:50px;
              font-size:14px;
              span{
                text-align:center;
                border:1px solid red;
                &:first-child{
                  position:relative;
                  padding:2px 0;
                  color:#fff;
                  background:#d92b2c;
                  &:after{
                    position:absolute;
                    bottom:-4px;
                    right:0;
                    left:0;
                    display:block;
                    content:"";
                    margin:0 auto;
                    width:6px;
                    height:6px;
                    background:#d92b2c;
                    transform:rotate(45deg);
                  }
                }
                &:last-child{
                  padding:3px 0;
                  color:#333;
                  background:#eee;
                  border:1px solid #ccc;
                  border-radius:0 0 2px 2px;
                }
              }
            }/*p.date*/
            a{
              color:#000;
              &:hover{
                color:#b60404;
              }
            }
          }/*li*/
        }/*ul*/
        @media only screen and (max-width:700px){
          margin-right:0;
        }
      }/*notice*/
      &.work{
        margin-left:15px;
        ul.content{
          display:flex;
          flex-flow:column;
          justify-content:space-around;
          align-items:stretch;
          width:100%;
          li{
            display:flex;
            justify-content: space-between;
            align-items:center;
            height:52px;
            border-bottom:1px dashed #ccc;
            a{
              width:480px;
              font-size:14px;
              color:#000;
              white-space:nowrap;
              overflow:hidden;
              text-overflow:ellipsis;
              @media only screen and (max-width:1200px){
                width:400px;
              }
              @media only screen and (max-width:1000px){
                width:360px;
              }
              @media only screen and (max-width:900px){
                width:300px;
              }
              @media only screen and (max-width:800px){
                width:260px;
              }
              @media only screen and (max-width:700px){
                width:75%;
                margin-left:0;
              }
            }/*a*/
            span{
              font-size:12px;
              color:#666;
              cursor:pointer;
            }/*span*/
            a{
              color:#000;
              &:hover{
                color:#b60404;
              }
            }
          }/*li*/
        }/*ul.content*/
        @media only screen and (max-width:700px){
          margin-left:0;
        }
      }/*work*/
    }/*div*/
    @media only screen and (max-width:1200px){
      width:98%;
    }
    @media only screen and (max-width:700px){
      flex-flow:column;
    }
  }/*other*/
}

</style>
