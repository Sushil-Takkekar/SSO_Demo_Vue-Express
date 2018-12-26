const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req, res) {
  res.send({msg:"Hey Sushil"});
});

app.listen(8001,function(){
  console.log('Server started on port 8001..');
});
