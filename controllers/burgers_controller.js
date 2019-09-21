
const express = require('express')
const app = express();

const exhandlebars = require('express-handlebars');

const PORT = 3000;

PORT = process.env.PORT || 3000;


// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Local requires
const burgermodel = require('./../models/burger.js')

//middlewares
app.engine('handlebars', exhandlebars({ defaultLayout: "main" }));
app.set('view engine', 'handlebars')





 
 
 app.listen(PORT, function(){
     console.log("App listening at localhost:"+PORT)
 })



    app.get('/',(req,res)=>{
        burgermodel.all(function(data){
            console.log(data);

            res.render('index',{data: data})
        })
         
     })
     app.post('/', (req,res)=>{
         let new_burger = req.body.hanburger
        burgermodel.create(new_burger,function(data){
            res.redirect('/')
            console.log(data)
        })
     })


