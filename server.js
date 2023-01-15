const express = require('express');

const app = express();

const ejs = require('ejs');

const path = require('path');

const expressLayout = require('express-ejs-layouts');

const PORT = process.env.PORT || 3000 ;

const mongoose = require('mongoose');

///// database connection

const url = 'mongodb://localhost:27017/pizza';
//mongoose.set('strictQuery', true);

mongoose.connect(url,{useNewUrlParser: true , useUnifiedTopology: true})
.then(() => console.log("connection Successful"))
.catch((err)=> console.log(err));



// const connection = mongoose.connection;
//     // event listener type
// connection.once('open' , ()=>{
//      console.log('Dtabase connected ....');
// }).on('error' ,function(err) {
//     console.log('connection failed.....')
// });

/// Asset

app.use(express.static('public'));

// set Template engine

app.use(expressLayout);
app.set('views' , path.join(__dirname , '/resources/views'));
app.set('view engine' , 'ejs');

// all the app.get() function in web .js
// because it make less complex in server.js 
 require('./routes/web')(app);


app.listen(PORT , () => {
    console.log('listening on port '+PORT);
}); 