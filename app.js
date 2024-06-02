const express= require('express')
const app= express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const routes=require('./routes/route.js')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.use('/',routes)
app.listen(3000,()=>console.log("connecting is done"))















