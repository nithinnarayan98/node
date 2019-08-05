var express=require('express');
const app=express();
app.listen(8080,function(req,res){
    console.log("server is starting")
})
app.get("/",function(req,res){
    res.sendfile(__dirname+"/src/view/home.html")
})
app.get("/emp",function(req,res){
    res.sendfile(__dirname+"/src/view/employee.html")
})
app.get("/emp/pemp",function(req,res){
    res.sendfile(__dirname+"/src/view/pemp.html")
})
app.get("/emp/pemp/:bid",function(req,res){
    res.send("the selected employee is"+req.params.bid)
})
app.get("/emp/demp",function(req,res){
    res.sendfile(__dirname+"/src/view/demp.html")
})
app.get("/prd",function(req,res){
    res.sendfile(__dirname+"/src/view/product.html")
})



