function cartController() {
    // all logic in conroller 
      return {
         //page read
         index(req,res) {
            
              res.render('customers/cart');
            
         }
      }
  
  }
  
  module.exports = cartController;