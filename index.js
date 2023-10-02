const express=require('express');
const app=express();
const {PythonShell} =require('python-shell');
app.get("/",(req,res,next)=>{
    let options = {
        mode: 'text',
        args: ['shubhamk314']
    };
    PythonShell.run('hi.py', null, function (err, result){
         console.log(result)
    });
    res.send('hu')
});
const port=process.env.PORT||8000;
app.listen(port,()=>console.log(`Server connected to ${port}`));