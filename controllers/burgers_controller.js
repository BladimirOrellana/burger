
const express = require('express')
const app = express();

const exhandlebars = require('express-handlebars');

const PORT = process.env.PORT || 2000;

app.use(express.static("public"))
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
     var devoured = 0;
     var column = 'devoured';
     var table = 'burgers'
    burgermodel.all(table,column,devoured,function(data){
        
        res.render('index',{data: data})
        

        
    })

  

  
     
 })


     app.post('/', (req,res)=>{
         let new_burger = req.body.hanburger
        burgermodel.create('burgers',new_burger,function(data){
            res.redirect('/')
            console.log(data)
        })
     })

     app.delete('/delete/:table/:id', (req,res)=>{
        var id = req.params.id;
        var  table = req.params.table;

        burgermodel.delete(table,id,function(data){
            if (data.affectedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
              } else {
                res.status(200).end();
                
              }

        })
         

   
    })

    app.put('/update/table/:table/id/:id',(req,res)=>{
        const devouredValue = 1;
       burgermodel.update(req.params.table,req.params.id, devouredValue,function(data){
        if (data.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
            
          }
       })

    })

     
   


