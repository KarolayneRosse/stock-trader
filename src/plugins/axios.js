import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseURL: 'https://stock-trader-72a3b-default-rtdb.firebaseio.com/'
        })
    }
})