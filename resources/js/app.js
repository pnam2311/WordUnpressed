import './bootstrap'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import router from '@/js/routes'
import App from '@/js/App'
 
Vue.use(Vuetify);

new Vue({
 el: '#app',
 router: router,
 render: h => h(App)
});

export default App;