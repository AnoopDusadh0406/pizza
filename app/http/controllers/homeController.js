const Menu = require('../../models/menu')

function homeController() 
{
  // all logic in conroller 
    return {
       //page read
        index(req,res) 
        {
    //          const pizzas = await Menu.find()
    //          console.log(pizzas);
    //          return res.render('home' , {pizzas: pizzas});
    Menu.find().then(function(pizzas)
        {
              console.log(pizzas)
              return res.render('home' , {pizzas: pizzas});
           });
    }
}
}
module.exports = homeController;