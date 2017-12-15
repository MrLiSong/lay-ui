<template>
    <div class='alert'>
      <button class="layui-btn layui-btn-primary" @click="alert()">弹窗</button>
      <button class="layui-btn layui-btn-primary" @click="alert1()">弹窗1</button>
      <button class="layui-btn layui-btn-primary" @click="alert2()">弹窗2</button>
      <button class="layui-btn layui-btn-primary" @click="alert3()">弹窗3</button>
    </div>
</template>
<script>
  export default {
    methods:{
      alert(){
        layui.use("layer",function () {
          var layer=layui.layer;
          layer.confirm('您是如何看待前端开发？', {
            btn: ['重要','奇葩'] //按钮
          }, function(){
            layer.msg('的确很重要', {icon: 1});
          }, function(){
            layer.msg('也可以这样', {
              time: 20000, //20s后自动关闭
              btn: ['明白了', '知道了']
            });
          });
        })
      },
      alert1(){
        layui.use("layer",function () {
          var layer=layui.layer;
          layer.msg('玩命提示中');
        })
      },
      alert2(){
        layui.use("layer",function () {
          var layer=layui.layer;
          layer.open({
            type: 1,
            skin: 'layui-layer-rim', //加上边框
            area: ['420px', '240px'], //宽高
            content: 'html内容'
          });
        })
      },
      alert3(){
        var layer=layui.layer;
        layer.prompt({title: '输入任何口令，并确认', formType: 1}, function(pass, index){
          layer.close(index);
          layer.prompt({title: '随便写点啥，并确认', formType: 2}, function(text, index){
            layer.close(index);
            layer.msg('演示完毕！您的口令：'+ pass +'<br>您最后写下了：'+text);
          });
        });
      }
    }
  }
</script>
<style scoped></style>
