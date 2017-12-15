<template>
  <div class="layui-side layui-bg-black">
    <div class="layui-side-scroll">
      <ul class="layui-nav layui-nav-tree"  lay-filter="test">
        <li class="layui-nav-item" v-for="x in items" :class="{'layui-nav-itemed':$route.params.parent==x.label}">
          <a href="javascript:">{{x.title}}</a>
          <dl class="layui-nav-child">
            <dd v-for="subs in x.item" :class="{'layui-this':$route.params.child==subs.label}"><router-link :to="subs.index" tag="a">{{subs.title}}</router-link></dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active:"",
        items:[
          {
            icon:'#xe68e',title:'基本元素',label:"baseElement",
            item:[
              {title:'按钮',index:"/button/baseElement/button",label:"button"},
              {title:'表格',index:"/table/baseElement/table",label:"table"},
              {title:'选项卡',index:"/tabs/baseElement/tabs",label:"tabs"},
              {title:'折叠面板',index:"/panel/baseElement/panel",label:"panel"},
              {title:'时间线',index:"/timeline/baseElement/timeline",label:"timeline"},
              {title:'表单',index:"/form/baseElement/form",label:"form"},
              {title:'栅格系统',index:"/grid/baseElement/grid",label:"grid"},
            ]
          },
          {
            icon:'#xe68e',title:'基本组件',label:"baseGroup",
            item:[
              {title:'弹出层',index:"/alert/baseGroup/alert",label:"alert"},
            ]
          }
        ]
      }
    },
    mounted(){
      console.log(this.$route.params);
    }
  }
</script>
<style scoped></style>
