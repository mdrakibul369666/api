const express = require('express')
const app = express()
const port = process.env.PORT ||'3000'
const path = require('path')

app.get('/' , (req , res)=>{
    console.log(path.join(__dirname , 'hello.js'))
    res.send('Hello')
})

app.get("/download" , (req ,res)=>{
    res.download(path.join(__dirname , "hello.txt"))
})

app.listen(port , ()=>{
    console.log('FuCCCCCCCK')
})