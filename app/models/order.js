const mongoose = require('mongoose');
// class
const Schema = mongoose.Schema
// schema / structure
const orderSchema = new Schema({
      
    customerId:{
                 type: mongoose.Schema.Types.ObjectId,
                 ref: 'User',
                 required: true 
                },
    items:      { type: Object , required: true } ,
    phone:      {type: String , required: true  },
    address:    {type: String , required: true},
    paymentType: {type: String , default: 'COD'},
    status:      {type: String, default: 'order_placed' },


},{timestamps: true});
// collection na me 'Menu' singular 

 module.exports = mongoose.model('Order', orderSchema);