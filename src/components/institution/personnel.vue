<template>
  <div class="personnel">
    <div class="title">
      <img src="../../assets/left_nav01.jpg" alt="">
      <h1>机构人员</h1>
    </div>
    <div class="content">
      <ul class="text">
        <li><span>书记</span><span>XXX</span></li>
        <li><span>副书记</span><span>XXX</span></li>
        <li><span>秘书处</span><span>处长：XXX</span></li>
        <li><span>办公室</span><span>主任：XXX 副主任：XXX</span></li>
        <li><span>组织部</span><span>部长：XXX</span></li>
        <li><span>网宣部</span><span>部长：XXX</span></li>
        <li><span>调研部</span><span>部长：XXX</span></li>
        <li><span>学生会</span><span>会长：XXX</span></li>
        <li><span>社团联合会</span><span>会长：XXX</span></li>
        <li><span>青年志愿者协会（红十字会）</span><span>会长：XXX</span></li>
        <li><span>《理工青年》工作室</span><span>室长：XXX</span></li>
        <li><span>艺术团</span><span>团长：XXX</span></li>
        <li><span>广播站</span><span>站长：XXX</span></li>
      </ul>
      <img src="../../assets/right_img.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'personnel',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.personnel{
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
    justify-content:space-between;
    align-items:flex-start;
    margin:10px 0;
    margin-bottom:20px;
    ul.text{
      flex:1;
      border:1px solid #f6f6f6;
      li{
        display:flex;
        align-items: center;
        border-bottom:1px solid #f6f6f6;
        &:nth-child(2n){
          background:#f9f9f9;
        }
        &:last-child{
          border:none;
        }
        span{
          padding:15px;
          &:first-child{
            flex:1;
            border-right:1px solid #f6f6f6;
          }
          &:last-child{
            flex:2;
            border-right:1px solid #f6f6f6;
          }
        }
      }
    }/*text*/
    img{
      max-width:100%;
      height:auto;
      @media only screen and (max-width:900px){
        width:30%;
      }
      @media only screen and (max-width:600px){
        display:none;
      }
    }
  }/*content*/
  @media only screen and (max-width:1200px){
    width:98%;
    padding:0 10px;
  }
}/*personnel*/
</style>
