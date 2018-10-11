const mongoose = require('mongoose');
var Schema = mongoose.Schema;




const ContactSchema = mongoose.Schema({
    

    _id: { type: Schema.Types.ObjectId, ref: 'User' },

    //address_home:
        
          street:{type:String},
          city:{type:String},
          state:{type:String}
          
/*
      address_office:  {
        street: {type:String},
        city:{type:string},
        state:{type:string}
        },*/
    
}); 

 module.exports = mongoose.model('Contact',ContactSchema);
