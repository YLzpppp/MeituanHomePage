import Vue from 'vue';
import App from './views/App.vue';
Vue.config.productionTip = false


var app = new Vue({

  data:{
    msg:'hello'
  },
  components:{
    App
  }
});
app.$mount('#app');
