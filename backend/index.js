// npm i express json-server cors axios
// npm i nodemon concurrently -D


const express = require('express');
const cors = require('cors');
//浏览器的安全机制，用于允许不同“源”之间访问资源


const app = express();
const PORT = 80;



app.listen(PORT,function(){
    console.log('Server is running on http://localhost:80')
});