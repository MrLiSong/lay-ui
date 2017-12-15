<template>
    <div>
      <div class="layui-container">
        常规布局（以中型屏幕桌面为例）：
        <div class="layui-row">
          <div class="layui-col-md9">
            你的内容 9/12
          </div>
          <div class="layui-col-md3">
            你的内容 3/12
          </div>
        </div>

        移动设备、平板、桌面端的不同表现：
        <div class="layui-row">
          <div class="layui-col-xs6 layui-col-sm6 layui-col-md4">
            移动：6/12 | 平板：6/12 | 桌面：4/12
          </div>
          <div class="layui-col-xs6 layui-col-sm6 layui-col-md4">
            移动：6/12 | 平板：6/12 | 桌面：4/12
          </div>
          <div class="layui-col-xs4 layui-col-sm12 layui-col-md4">
            移动：4/12 | 平板：12/12 | 桌面：4/12
          </div>
          <div class="layui-col-xs4 layui-col-sm7 layui-col-md8">
            移动：4/12 | 平板：7/12 | 桌面：8/12
          </div>
          <div class="layui-col-xs4 layui-col-sm5 layui-col-md4">
            移动：4/12 | 平板：5/12 | 桌面：4/12
          </div>
        </div>
      </div>
    </div>
</template>
<script></script>
<style scoped>
  .layui-row>div{background: #00F7DE;line-height: 50px;padding:10px;box-sizing: border-box;}
</style>
