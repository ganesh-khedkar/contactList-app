var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cars = require('cars');
var path = require('path');

var app = express();


//404 error
var notFound=function(req,res,next){
    res.status(404);
    res.send({msg:'404 page not found'});
};



const route = require('./routes/route');

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/contactList', { useNewUrlParser: true });

mongoose.connection.on('connected',()=>{
    console.log('connected to database mongodb @ 27017');
});

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('error in database connection',+err)
    }
    
});


//port no
const port = 3000;

//adding midalware
//app.use(cars());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);
app.use(notFound);


app.get('/',(req,res)=>{
    res.send('foobar');
});
//500 Eroor
app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status(500);
    res.send('500 something goes wrong');
});

app.listen(port,()=>{
    console.log('server started at port:'+port);
});