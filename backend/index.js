// npm i express json-server cors axios
// npm i nodemon concurrently -D

const express = require('express');
const cors = require('cors');
//浏览器的安全机制，用于允许不同“源”之间访问资源
const router = require('./routes/index');
const { handleErrors } = require('./middleware/errorMiddleware');


const app = express();
const PORT = 80;

app.use(cors());
app.use(express.json());
app.use('/api',router)
// user error middleware at the end
app.use(handleErrors)

app.listen(PORT,function(){
    console.log('Server is running on http://localhost:80')
});