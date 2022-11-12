const http = require("http");
const db = require("./db.json");
const fs = require("fs");
const server = http.createServer((req,res)=>{
    console.log(req.method,req.url);
    if(req.method==="GET"){
        if(req.url==="/"){
            res.write("<h1>Hello, You are on HomePage</h1>");
        } if(req.url==="/products"){
           res.write(JSON.stringify(db.produts));
        }else if(req.url==="/users"){
            res.write(JSON.stringify(db.users));
        }
    }else if(req.method==="POST"){
        if(req.url==="/products"){
            db.produts.push({id:1,content:"New Products"})
           res.write(JSON.stringify(db.produts));
        }else if(req.url==="/users"){
            db.users.push({id:1,Name:"New Users"})
            res.write(JSON.stringify(db.users));
        }
        fs.writeFileSync("./db.json",JSON.stringify(db))
    }
    
    res.end();
})
server.listen(8080,()=>{
    console.log("Listening on http://localhost:8080");
})