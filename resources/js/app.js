import './bootstrap'
import Vue from 'vue'
import Vuetify from 'vuetify'
import router from '@/js/routes'
import App from '@/js/App'
import 'vuetify/dist/vuetify.min.css'
 
Vue.use(Vuetify);

new Vue({
 el: '#app',
 vuetify: new Vuetify({}),
 router: router,
 render: h => h(App)
});

export default App;