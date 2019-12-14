import './bootstrap'
import Vue from 'vue'
import App from '@/js/App'
import router from '@/js/routes'
import vuetify from './vuetify'
 
new Vue({
 el: '#app',
 vuetify: vuetify,
 router: router,
 render: h => h(App)
});

export default App;