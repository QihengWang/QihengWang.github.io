const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));//声明静态资源的文件夹

app.get('/', (req, res) => {
    res.render('index.html');
})

app.listen(8080, () => {
    console.log('listenint on port 8080');
})