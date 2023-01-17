const mongoose = require('mongoose');
// class
const Schema = mongoose.Schema
// schema / structure
const userSchema = new Schema({
      
    name:     {type: String , required: true} , 
    email:    {type: String , required: true , unique: true} ,
    password: {type: String , required: true , },
    role:     {type: String , default: 'customer'}

},{timestamps: true});
// collection name 'Menu' singular 

 module.exports = mongoose.model('User', userSchema);