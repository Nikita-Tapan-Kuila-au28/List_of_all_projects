require("dotenv").config();
const express=require('express');
const adminRoutes=require('./router/admin.js');
const userRoutes=require('./router/user');
const app=express();
const port=process.env.APP_PORT || 3000;

const bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/css',express.static(__dirname+'/public/css'));
app.use('/images',express.static(__dirname+'/public/images'));
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.json());




app.use(adminRoutes);
app.use(userRoutes);



app.listen(port,()=>{
   console.log(`http://localhost:${port}`);
 })



