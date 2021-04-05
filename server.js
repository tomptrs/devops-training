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


app.listen(8080, () => console.log('Server ready'))