<template>
  <el-container>
    <el-aside width="200px">
      <el-menu>
        <el-menu-item :key="1" index="1" @click="handleLoadButtonClick('urlA')">组件A</el-menu-item>
        <el-menu-item :key="2" index="2" @click="handleLoadButtonClick('urlB')">表单设计器</el-menu-item>
        <el-menu-item :key="3" index="3" @click="handleLoadButtonClick('urlC')">系统首页</el-menu-item>
        <el-menu-item :key="4" index="4" @click="handleLoadButtonClick('urlD')">基础表格</el-menu-item>
        <el-menu-item :key="5" index="5" @click="handleLoadButtonClick('url5')">tab选项卡</el-menu-item>
        <el-menu-item :key="6" index="6" @click="handleLoadButtonClick('url6')">基本表单</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <AsyncComponentRE
              :url="renderUrl"></AsyncComponentRE>
    </el-main>
  </el-container>
</template>

<script>
  import AsyncComponentRE from '../components/async-component/async-component.vue';
  export default {
    name: 'LayoutView',
    data() {
      return {
        textarea: '',
        renderUrl: '',
        urlA: './assets/components/componentA.umd.min.js',
        urlB: './assets/components/vueformdesign.umd.min.js',
        urlC: './assets/components/dashBoard.umd.min.js',
        urlD: './assets/components/BaseTable.umd.min.js',
        url5: './assets/components/Tabs.umd.min.js',
        url6: './assets/components/BaseForm.umd.min.js',
      };
    },
    components: {
        AsyncComponentRE
    },
    methods: {
      handleLoadButtonClick(type) {
        this.renderUrl = this[type];
      }
    }
  };
</script>

<style lang="scss">
  .layout {
    margin: 0 auto;
  }

</style>
