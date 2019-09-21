
 require('dotenv').config()
 const mysql = require('mysql')
 const db_credentials = {
     "localhost": process.env.DB_HOST,
     "user": process.env.DB_USER,
     "password": process.env.DB_PASSWORD,
     "database": process.env.DB_DATABASE
 }
 

 
 if(process.env.JAWSDB_URL) {
     link = mysql.createConnection(process.env.JAWSDB_URL);
 }else{
    link = mysql.createConnection(db_credentials)
 }
 
 

 
 link.connect(function (err) {
     if (err) {
         console.error('error connecting: ' + err.stack);
         return;
     }
     console.log('Connection Sucessful! and connected as id ' + link.threadId);
 });
 
 module.exports = link;





