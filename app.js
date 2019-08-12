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
    res.send("the selected employee is"+  req.params.bid)
})
app.get("/emp/demp",function(req,res){
    res.sendfile(__dirname+"/src/view/demp.html")
})
app.get("/emp/demp/:id",function(req,res){
    res.send("employe is"+   req.params.id)
})
app.get("/prd",function(req,res){
    res.sendfile(__dirname+"/src/view/prd.html")
})
app.get("/prd/retail",function(req,res){
    res.sendFile(__dirname+"/src/view/retail.html")
})
app.get("/prd/retail/:aid",function(req,res){
    res.send("product is"+req.params.aid)
})
app.get('/prd/whsale',function(req,res){
    res.sendFile(__dirname+"/src/view/whsale.html")
})
app.get("/prd/whsale/:cid",function(req,res){
    res.send("the product is"+req.params.cid)
})




