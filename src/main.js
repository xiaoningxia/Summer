import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
//样式文件需要单独引入
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
// 高德地图配置
import VueAMap from 'vue-amap' // 引入插件
Vue.use(VueAMap) // 使用插件
Vue.use(ElementUI);
VueAMap.initAMapApiLoader({ // 初始化插件
  key: '47fc61d16b7b6a8e7396839b1773afdd', // 高德key
  plugin: ['AMap.Geocoder', 'AMap.PlaceSearch', 'AMap.Geolocation', 'AMap.CitySearch'], // 插件集合，根据自己的需求添加
  uiVersion: '1.0.11', // 不加会报错，加上吧
  v: '1.4.15' // 默认高德 sdk 版本为 1.4.4
})

new Vue({
  render: h => h(App),
}).$mount('#app')
