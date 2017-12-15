<template>
    <div class='layui-layout layui-layout-admin'>
      <v-header></v-header>
      <v-slider></v-slider>
      <div class="layui-body">
        <div style="padding: 20px;">
            <router-view></router-view>
        </div>
      </div>
      <div class="layui-footer">
        © layui.com - 底部固定区域
      </div>
    </div>
</template>
<script>
  import vHeader from './Header.vue'
  import vSlider from './Slider.vue'
  export default {
    data(){
      return {}
    },
    mounted() {
      this.layUi();
    },
    methods: {
      layUi() {
        layui.use('element', function(){
          var element = layui.element;
        });
      }
    },
    components:{
      vHeader,vSlider
    }
  }
</script>
<style scoped></style>
