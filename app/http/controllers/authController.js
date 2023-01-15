function authControler() {
    // all logic in conroller 
      return {
         //page read
         login(req,res) {
            
              res.render('auth/login');
            
         } ,

         register(req,res) {
            
            res.render('auth/register');
          
       }
      }
  
  }
  
  module.exports = authControler;