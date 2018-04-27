<template>
  <div class="song">
    <div class="title">
      <img src="../../assets/left_nav01.jpg" alt="">
      <h1>团徽</h1>
    </div>
    <div class="content">
      <div class="text">
        <img src="../../assets/song.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'song',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.song{
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
}/*song*/
</style>
