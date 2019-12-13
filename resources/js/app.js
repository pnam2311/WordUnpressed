import './bootstrap';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import App from '@/js/App';
 
Vue.use(Vuetify);

new Vue({
 el: '#app',
 render: h => h(App)
});

export default App;