//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(reqt, res){
  res.send("<h1>hello world!</h1>");
});

app.get("/contact", function(reqt, res){
  res.send("contact me at: marcos@gmail.com");
});

app.get("/about", function(reqt, res){
  res.send("fullstack web developer");
});

app.get("/hbbies", function(reqt, res){
  res.send("code and marketing");
});

app.listen(3000, function(){
  console.log("server starter on port 3000");
});
