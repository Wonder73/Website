<template>
  <div class="oath">
    <div class="title">
      <img src="../../assets/left_nav01.jpg" alt="">
      <h1>团徽</h1>
    </div>
    <div class="content">
      <div class="text">
        <p>我志愿加入中国共产主义青年团，坚决拥护中国共产党的领导，遵守团的章程，执行团的决议，履行团员义务，严守团的纪律，勤奋学习，积极工作，吃苦在前，享受在后，为共产主义事业而奋斗。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'oath',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.oath{
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
  .content{
    display:flex;
    align-items:flex-start;
    justify-content: center;
    margin:10px 0;
    .text{
      // margin:0 20px;
      display:flex;
      align-items:center;
      justify-content: center;
      flex-flow:column;
      p{
        text-align:center;
        font-size:16px;
        font-weight:bold;
        text-indent:32px;
        line-height:1.5;
        letter-spacing: 2px;
        color:#000;
      }
    }
  }
}/*oath*/
</style>
