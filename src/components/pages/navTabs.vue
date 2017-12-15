<template>
  <div class="layui-tab" lay-filter="test">
    <ul class="layui-tab-title">
      <li class="layui-this" lay-id="1">网站设置</li>
      <li lay-id="2">用户管理</li>
      <li lay-id="3">权限分配</li>
      <li lay-id="4">商品管理</li>
      <li lay-id="5">订单管理</li>
    </ul>
    <div class="layui-tab-content">
      <div class="layui-tab-item layui-show">
        点击该Tab的任一标题，观察地址栏变化，再刷新页面。选项卡将会自动定位到上一次切换的项
      </div>
      <div class="layui-tab-item">内容2</div>
      <div class="layui-tab-item">内容3</div>
      <div class="layui-tab-item">内容4</div>
      <div class="layui-tab-item">内容5</div>
    </div>
  </div>
</template>
<script></script>
<style scoped></style>
