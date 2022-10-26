import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
        el: "#app",
        render: h => h(App),
        // render(createElement) {
        //     render createElement('h1', "渲染这是内容")
        // },
        // render:(q){
        //     return q('h1', "渲染这是内容");
        // }

    })
    // new Vue({
    //     render: h => h(App),
    // }).$mount('#app')
console.log(1111111111)