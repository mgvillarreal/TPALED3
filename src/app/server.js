const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'package.json')); //'/dist/ng-blog'
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'package.json'));
});

app.listen(process.env.PORT || 5000);