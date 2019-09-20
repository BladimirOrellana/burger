const express = require('express')
const mysql = require('mysql')
const handlebars = require('express-handlebars');

const PORT = process.env.PORT || 3000;

const app = express();
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World")
})


app.listen(PORT, function(){
    console.log("App listening at localhost:"+PORT)
})