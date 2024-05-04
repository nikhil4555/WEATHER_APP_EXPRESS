const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 4000;


//using the relative path to join to the public folder using path require
const static_path = path.join(__dirname,'../public')
app.use(express.static(static_path)); 
// app.use(express.static('EXPRESS_WEB/public')) --->Absolute path

//using the relative path to join to the templates folder using path join --- > inplace of absolute path in down app.set we can use this relative path also
const template_path = path.join(__dirname,'./../templates/views')
const partials_path = path.join(__dirname,'./../templates/partials')


//AS the static files can't handle all of them for dynamically we can use ejs template engine or hbs template engine here we are using hbs
app.set('view engine','hbs');


//registering the partials ---> after registering we can use them from views to partials using the {{}} by linking 
hbs.registerPartials('./EXPRESS_WEB/templates/partials')
app.set('views','./EXPRESS_WEB/templates/views');

//routes
app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/weather',(req,res)=>{
    res.render('weather');
})
app.get('*',(req,res)=>{
    res.render('404error');
})

app.listen(port,()=>{
    console.log(`Litsening on port ${port}`);
})