<template>
  <div class="flag">
    <div class="title">
      <img src="../../assets/left_nav01.jpg" alt="">
      <h1>团旗</h1>
    </div>
    <div class="content">
      <div class="text">
        <img src="../../assets/flag.gif" alt="">
        <p>中国共产主义青年团团旗帜的旗面为红色，象征革命胜利；</p>
        <p>左上角缀黄色五角星，周围环绕黄色圆圈，象征中国青年一代紧密团结在中国共产党周围。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flag',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.flag{
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
        font-size:14px;
        line-height:1.5;
        color:#666;
      }
      img{
        margin:10px auto;
        max-width:100%;
        height:auto;
      }
    }
  }
}/*flag*/
</style>
