const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/students",(req,res)=>{
    res.json({name :'achref',age:'23'})
})
app.listen(PORT,()=>{
    console.log("server is running on port ",PORT);
})
