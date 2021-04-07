const express = require('express')
const app = express()

app.use(express.static('client'));

app.get("/",(req,res)=>{
   
  //  res.sendFile(path.join(__dirname + '/client/start.html'));
  res.sendFile(__dirname + '/client/start.html');
})

app.get("/test",(req,res)=>{
   
    //  res.sendFile(path.join(__dirname + '/client/start.html'));
    res.send("Hallo Tom")
  })

  app.get("/test2",(req,res)=>{
   
    //  res.sendFile(path.join(__dirname + '/client/start.html'));
    res.send("Hallo test2")
  })

  app.get("/test3",(req,res)=>{
   
    //  res.sendFile(path.join(__dirname + '/client/start.html'));
    res.send("Hallo test3")
  })


app.listen(8080, () => console.log('Server ready'))