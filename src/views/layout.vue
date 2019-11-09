<template>
  <div class="layout">
    <el-button type="primary" @click.stop="handleLoadButtonClick('urlA')">加载异步组件A</el-button>
    <el-button type="primary" @click.stop="handleLoadButtonClick('urlB')">加载异步组件B</el-button>
    <AsyncComponentRE
      :url="renderUrl">
    </AsyncComponentRE>
  </div>
</template>

<script>
  import AsyncComponentRE from '../components/async-component/async-component.vue';
  export default {
    name: 'LayoutView',
    data() {
      return {
        textarea: '',
        renderUrl: '',
        urlA: '/assets/components/componentA.umd.min.js',
        urlB: '/assets/components/vueformdesign.umd.min.js'
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
  .input {
    margin: 20px 0;
  }
</style>
