
// https://github.com/juniorhari/repo4.git
//jshint esversion:6

const express = require("express");
const app = express();
const request = require("request");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

var formValueSent = "";
var formValueArr = ["apples", "oranges"];


app.get("/", function(req,res){
   res.render("index", { someCrap: "XOW", formValueArr: formValueArr });
});

app.post("/", function(req, res){
    formValueSent  = req.body.formValue;
    formValueArr.push(formValueSent);
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port: 3000");
});
