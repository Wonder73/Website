<template>
  <div class="institution">
    <div class="title">
      <img src="../../assets/left_nav01.jpg" alt="">
      <h1>机构简介</h1>
    </div>
    <div class="content">
      <div class="text">
        <p> 共青团广东理工职业学院委员会（简称校团委），接受学院党委和共青团广东省委员会的领导，内设办公室、组织部、网宣部、调研部等4个部门，统筹指导学生会、学生社团联合会、学生媒体中心、校青年志愿者联合会、大学生创业促进会、校艺术团等6个校级学生组织，下辖1个团工委及8个系团总支。校团委坚持用科学发展观统领全局，以育人为核心,围绕学院的发展目标,充分发挥共青团组织的生力军作用,团结带领广大团员青年, 走彰显专业特点、工学结合之路，积极建设文理兼容的校园文化, 注重实践创新能力的培养，做大做强精品项目、特色项目,不断推动理工特色的共青团工作上新台。</p>
        <p>校团委书记：胡小军（团湛江市委挂职）</p>
        <p>校团委副书记：李炳洪（主持工作）、方晓</p>
        <p>校团委专职团干：钟善年</p>
        <p>办公地点：中山校区教学楼202   校本部8号楼502A</p>
        <p>办公电话： 0760-89911501（中山校区）    020-83501532(广州校本部)</p>
      </div>
      <img src="../../assets/right_img.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'institution',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.institution{
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
    margin:10px 0;
    .text{
      margin:0 20px;
      p{
        color:#333;
        text-indent:32px;
        line-height:1.5;
      }
    }
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
  }
}/*institution*/
</style>
