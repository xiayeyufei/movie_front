import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import './assets/icon/iconfont.js'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
    render: h => h(App),
    vuetify,
    router
}).$mount('#app');
