
//require node js , Express (VPN(joking)) ,lodash module
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { redirect } = require("express/lib/response");
const res = require("express/lib/response");
const _ = require('lodash');
const path = require('path');


const hello = "Sucomuh ding dong ";
const app = express();

app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));

app.use(express.static('public'));

app.get('/',function(req,res){
res.render('index');
});



//nkjdngmdasfbgjkdsfgbkjbgjfgl;jksbnljgkf;dgnadk;fjbg;dfmng;ljdfglnj



const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Server started on port 3000");
});
