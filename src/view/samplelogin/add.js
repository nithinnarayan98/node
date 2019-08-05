var express=require('express');
var bodyparser=require('body-parser')
const app=express();
app.get("/",function(req,res){
    res.sendfile(__dirname+"/login.html")
})
app.get("/home",function(req,res){
    res.sendfile(__dirname+"/home.html")})
app.listen(8080,function(req,res){
    console.log("server is starting")
})