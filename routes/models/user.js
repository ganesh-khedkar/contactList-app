const mongoose = require('mongoose');
var Schema = mongoose.Schema;



const UserSchema = mongoose.Schema({
    // _id: Schema.Types.ObjectId,
    first_name:{       
         type:String,
        required: true
    },
    last_name:{
        type:String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    }, 
contact_id: [{ type: Schema.Types.ObjectId, ref: 'Contact' }]
});

 module.exports = mongoose.model('User',UserSchema);
