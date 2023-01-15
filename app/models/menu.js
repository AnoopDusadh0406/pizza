const mongoose = require('mongoose');
// class
const Schema = mongoose.Schema
// schema / structure
const menuSchema = new Schema({
      
    name: {type: String , required: true} , 
    image: {type: String , required: true} ,
    price: {type: Number , required: true} ,
    size: {type: String , required: true}

})
// collection name 'Menu' singular 

 module.exports = mongoose.model('menue', menuSchema);