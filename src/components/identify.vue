<template lang="html">
  <div id="identify">
    <canvas id="canvas" width="120" height="40" @click="drawPic"></canvas>
  </div>
</template>

<script>
/*随机数*/
function randomNum(min,max){
  return parseInt(Math.random()*(max-min)+min);
}
/*随机颜色*/
function randomColor(min,max){
  var r=randomNum(min,max);
  var g=randomNum(min,max);
  var b=randomNum(min,max);

  return "rgb("+r+","+g+","+b+")";
}
export default{
  data(){
    return {
      identify:''
    }
  },
  mounted(){
    this.drawPic();
  },
  methods:{
    drawPic(){
      this.identify='';
      var canvas = document.getElementById('canvas');
      var width = canvas.width;
      var height = canvas.height;
      var ctx = canvas.getContext('2d');
      ctx.textBaseline = 'bottom';

      /*绘制背景*/
      ctx.fillStyle = randomColor(160,240);
      ctx.fillRect(0,0,width,height);


      /*绘制干扰线*/
      for(let i = 0; i < 8; i++){
        ctx.beginPath();
        ctx.fillStyle = randomColor(140,180);
        ctx.moveTo(randomNum(0,width),randomNum(0,height));
        ctx.lineTo(randomNum(0,width),randomNum(0,height));
        ctx.stroke();
        ctx.closePath();
      }

      /*绘制干扰点*/
      for(let i = 0; i < 100; i++){
        ctx.beginPath();
        ctx.fillStyle = randomColor(0,255);
        ctx.arc(randomNum(0,width),randomNum(0,height),1,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
      }

      /*绘制文字*/
      var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
      var length = 4;   //验证码的长度
      for(let i = 0; i < length; i++){
        let text = str[randomNum(0,str.length)];
        this.identify += text;
        let x = 10+i*25;
        let y = randomNum(25,45);
        let deg = randomNum(-45,45);
        ctx.translate(x,y);
        ctx.rotate(deg*Math.PI/180);
        ctx.fillStyle = randomColor(50,160);
        ctx.font = randomNum(25,40)+'px SimHei';
        ctx.fillText(text,0,0);
        ctx.rotate(-deg*Math.PI/180);
        ctx.translate(-x,-y);
      }
      this.$emit('identify',this.identify);
    }
  }
}
</script>

<style lang="scss" scoped>
#identify{
  width:120px;
  border:none;
  border-radius:0;
  canvas{
    cursor:pointer;
  }
}
</style>
