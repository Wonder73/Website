<!--机构简介-->
<template>
  <div id="detail">
    <vueHeader></vueHeader>
    <div class="detail">
      <div class="title">
        <h1>{{title}}</h1>
        <p>作者：{{author}} 发表时间：{{datetime}}</p>
      </div>
      <div class="content" v-html="content"></div>
    </div><!--detail-->
    <vueFooter></vueFooter>
  </div>
</template>

<script>
import vueHeader from '../../components/Header.vue';
import vueFooter from '../../components/Footer.vue';
import axios from 'axios';
export default {
  name: 'detail',
  mounted(){
    var id = window.location.search.split('=')[1];
    axios.get('./static/php/news.php?opeartion=showRow&id='+id).then((res)=>{
      this.datetime = res.data[0].date;
      this.title = res.data[0].title;
      this.author = res.data[0].author;
      this.content = res.data[0].content;
    });
  },
  data(){
    return {
      datetime:'',
      title:'',
      author:'',
      content:''
    }
  },
  components:{
    vueHeader,
    vueFooter
  }
}
</script>

<style lang="scss" scoped>
#detail {
  width:100%;
  .detail{
    margin:10px auto;
    width:1200px;
    min-height:800px;
    border:1px solid #ccc;
    border-radius:5px;
    .title{
      padding:10px 0;
      width:100%;
      text-align:center;
      border-bottom:1px solid #ccc;
      h1{
        padding:10px 0;
        font-size:20px;
        font-weight:bold;
      }
      p{
        font-size:14px;
        color:#999;
      }
    }/*title*/
    .content{
      padding:10px;
      img{
        max-width:100%;
        height:auto;
      }
    }
    @media only screen and (max-width:1200px){
      width:98%;
    }
  }/*.detil*/
}
</style>
