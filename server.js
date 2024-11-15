const express = require('express')
const app = express()



  const appareils=[{name:"Refrigerateur",status:"Allumé"},
      {name:"Tv",status:"Eteint"},
      {name:"Micro Onde",status:"Allumé"},
      {name:"Climatiseur",status:"Eteint"},
    ]
const PORT = process.env.PORT || 3000;
app.get("/appareils",(req,res)=>{
    res.send(appareils)
})
app.get("/students",(req,res)=>{
    res.json({name :'achref',age:'23'})
})
app.listen(PORT,()=>{
    console.log("server is running on port ",PORT);
})
