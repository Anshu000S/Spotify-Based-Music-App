require('dotenv').config()
const express = require('express');
const router  = require('./router/router');

const app     = express();
const port = process.env.PORT || 3000

//middle ware to parse json responses
app.use(express.json());

//router to route the endpoints
app.use('/',router);


// app.get('/',(req,res)=>{
//     res.send(`<h1>THE SERVER IS RUNNING!!!</h1>`)
// })

const start = async ()=>{
    try{
        await app.listen( port ,()=>{
            console.log(`The server is listening to the port ${port}`);
        })
    } catch (error) {
        console.log(error)
    }
}

start()
