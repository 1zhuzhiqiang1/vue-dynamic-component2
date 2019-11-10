<template>
  <component
    :is="mode"
    v-bind="$attrs"
    v-on="$listeners">
  </component>
</template>

<script>
  import Axios from 'axios';

  export default {
    name: 'AsyncComponent',
    props: {
      // 父组件提供请求地址
      url: {
        type: String,
        default: ''
      }
    },
    inheritAttrs: true,
    data() {
      return {
        resData: '',
        mode: ''
      };
    },
    watch: {
      url: {
        immediate: true,
        async handler(val, oldVal) {
          if (!this.url) return;
          // Cache 缓存 根据 url 参数
          if (!window.SyncComponentCache) {
            window.SyncComponentCache = {};
          }
          let res;
          if (!window.SyncComponentCache[this.url]) {
            window.SyncComponentCache[this.url] = Axios.get(this.url);
            res = await window.SyncComponentCache[this.url];
          } else {
            res = await window.SyncComponentCache[this.url];
          }
          // console.log(res.data);
          // let Fn = Function;
          // this.mode = new Fn(`return ${res.data}`)();
          this.mode = this._require(res.data);
          console.log(this.mode);
        }
      }
    },
    methods: {

      _require: function (content) {//自定义一个 require 实现
        // 定义一个Module对象
        let Module = function () {
          this.exports = {};
        };
        // 头尾拼接包装成新的字符串
        let packSourceCode = '(function(module,exports,require){ ' + content + ' return module.exports; })';
        // 字符串转换成函数
        let packFunc = eval(packSourceCode);
        // 实例化一个Module 里面有一个exports属性
        let module = new Module();
        // 把module 和 它内部的module.exports都作为参数传进去
        // 并得到挂在到module.exports 或 exports上的功能
        return packFunc(module, module.exports,require);
      }
    }
  };
</script>
