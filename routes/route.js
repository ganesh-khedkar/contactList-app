const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('./models/user');
const Contact = require('./models/contact');





//retriving data
/*router.get('/user',(req,res,next)=>{
    User.find(function(err,user){
        res.json(user);
    });

});*/

//find two moduls
router.get('/user',(req,res,next)=>{
  
    
    User.find().
    populate('contact_id').
    exec(function(err,user){
        res.json(user);
    });

});
//contact data

router.get('/contact',(req,res,next)=>{
    Contact.find(function(err,contact){
        res.json(contact);
    });

});
//Add contact data
router.post('/contact',(req,res,next)=>{


    let newContact = new Contact({
 
       
        street: req.body.street,
        city:req.body.city,
        state:req.body.state
        
    });
 
    newContact.save((err,contact)=>{
        if(err){
            res.json({msg:'faild to add contact'});
        }else{
         res.json({msg:' contact added sucessfully'});
        }
    });
 });

//Find single data using id

/*router.get('/user/:id',(req,res,next)=>{
    User.findById({_id: req.params.id},function(err,result){
        if(err){

           res.json({msg:"find data by id sucessfully"});
        }else{
            res.json(result);
        }
    });
});*/




// add user data
router.post('/user',(req,res,next)=>{


   let newUser = new User({

    _id: new mongoose.Types.ObjectId(),
       first_name: req.body.first_name,
       last_name:req.body.last_name,
       phone:req.body.phone
   });

   newUser.save((err,user)=>{
       if(err){
           res.json({msg:'faild to add user'});
       }else{
        res.json({msg:' user added sucessfully'});
       }
   });
});

//Deleting data
router.delete('/user/:id',(req,res,next)=>{
     User.remove({_id: req.params.id},function(err,result){
         if(err){

            res.json(err);
         }else{
             res.json(result);
         }
     });
});
 //Update data of user
  router.put('/user/:id',(req,res,next)=>{
     var query={
        first_name: req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone
     };
    User.updateMany({_id: req.params.id},query,function(err,result){
        if(err){

           res.json({msg:'faild to update user'});
        }else{
            res.json({msg:' user updated sucessfully'});
        }
    });
});
//Update data by contact
router.put('/contact/:id',(req,res,next)=>{
    var query={
        street: req.body.street,
        city:req.body.city,
        state:req.body.state
    };
   Contact.updateMany({_id: req.params.id},query,function(err,result){
       if(err){

          res.json({msg:'faild to update contact'});
       }else{
           res.json({msg:' contact updated sucessfully'});
       }
   });
});


module.exports= router;