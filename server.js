// secret key 
require('dotenv').config();

const express = require('express');

const app = express();

const ejs = require('ejs');

const path = require('path');

const expressLayout = require('express-ejs-layouts');

const PORT = process.env.PORT || 3000 ;

const mongoose = require('mongoose');
// for session
const session = require('express-session');
// for cookies 
const flash = require('express-flash');

// for log in system
const passport = require('passport');

// for session storage store  in mongo(database) . It return  class type or constructer
const MongDbStore =  require('connect-mongo')(session);


///// database connection

const url = 'mongodb://localhost:27017/pizza';
mongoose.set('strictQuery', false);

 mongoose.connect(url,{useNewUrlParser: true , useUnifiedTopology: true});
 const connection = mongoose.connection;
 //     // event listener type
connection.once('open' , ()=>{
     console.log('Dtabase connected ....');
}).on('error' ,function(err) {
    console.log('connection failed.....')
});




//Session store
let mongoStore = new MongDbStore({
              mongooseConnection: connection,
              collection: 'sessions'}) ;


// session config for add to cart storage

app.use(session({
    // secret for cookies bcz it's encryption format
      secret : process.env.COOKIE_SECRET,
      resave: false ,
      store : mongoStore,
      saveUninitialized: false,
      Cookie: {maxAge : 1000*60*60*24} // 24 hour
}));






// passport config
const passportInit = require('./app/config/passport');
passportInit(passport);
app.use(passport.initialize());
app.use(passport.session());


// flash as a middleware
app.use(flash()); 

/// Asset

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// global middleware bcz in layout we need to use session and user
app.use((req,res,next)=>{
     res.locals.session = req.session;
     res.locals.user = req.user;
     next();
});

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