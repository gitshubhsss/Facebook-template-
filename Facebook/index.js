const express = require("express");

const app = express();

const port=8080;

app.listen(port,()=>{
    console.log(`app is listening on the port ${port}`);
})

const path =require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))

app.get("/facebook/:username",(req,res)=>{
        const {username}=req.params;

        const fbData=require("./data.json");

        const data=fbData[username];

        if(data){
            res.render("facebook.ejs",{username,data})
        }
        else{
            res.render("error.ejs")
        }
})


