//入口文件
import Vue from 'vue'

//导入mui样式
import './lib/mui/css/mui.css'
import './lib/mui/js/mui.min.js'


//按需导入组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

// 导入组件
import app from './App.vue'

var vm = new Vue({
	el: '#app',
	render: c=>c(app)
})