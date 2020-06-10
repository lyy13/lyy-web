//后台服务器

//引入express包，得到的是一个函数
const express = require('express')

//函数调用得到一个对象
const app = express()

//通过对象，调用get的api，监听路由 
//res.end和res.send一样作用，返回内容
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))