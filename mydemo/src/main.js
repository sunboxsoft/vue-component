// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ui2006jia from 'ui-2006jia'
Vue.config.productionTip = false
Vue.use(ui2006jia)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})