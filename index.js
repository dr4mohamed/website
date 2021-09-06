const express = require("express");
const redis = require("redis");
const app = express();
let redis_url = process.env.REDIS_HOST;
let redis_port = process.env.REDIS_PORT;
let port = process.env.PORT || 3000;
let client = require('redis').createClient("redis://"+redis_url+":"+redis_port);

app.get("/", async (req, res) => {
  client.get("title", (error, result)=> {                
    if(error){                                                 
      return res.status(500).json({error: error});                              
    }else{
      return res.status(200).json({result: result});                             
    }    
    
  })  
});

app.listen(port, () => {
    console.log("Node server started port: $port");
});

