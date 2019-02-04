// load our application using express
const express = require( 'express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql')

// Use morgan to log server requests
app.use(morgan('short'))
// Configure your routes/ GET requests here

// Route to return a certain user based on id
app.get("/user/:id",(req,res) => {
  console.log("Fetching user with id: " + req.params.id);

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'my_directory'
  });

  const userId = req.params.id
  const queryString = "Select * from users where user_id =?"
  connection.query(queryString,[userId],(err,rows,fiels) => {

    if (err) {
      console.log("Failed to query for users: " + err)
      res.sendStatus(500)
      return
    }
    else{
      console.log("Fetched users")
      
      var phoneBook = ""

      for (let i = 0; i < rows.length; i++) {
        var row = rows[i].first_name + ' ' + rows[i].last_name + ' : '+ rows[i].phone
        console.log(row)
        phoneBook += row
      }

      res.json(phoneBook)
    }
    
  })
})

// Route to print all users
app.get("/users",(req,res) => {
  console.log("Responding to users route");
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'my_directory'
  });

  const queryString = "Select * from users"
  connection.query(queryString,(err,rows,fiels) => {

    if (err) {
      console.log("Failed to query for users: " + err)
      res.sendStatus(500)
      return
    }
    else{
      console.log("Fetched users")
      
      var records = []

      for (let i = 0; i < rows.length; i++) {
        records.push({firstname:rows[i].first_name, LastName: rows[i].last_name, PhoneNumber: rows[i].phone})
      }

      res.json(records)
    }
    
  })
})

// Just the root route
app.get("/",(req,res) => {
  console.log("Responding to root route")
  res.send("Hello from ROOT")
})

// Running on localhost:3000
app.listen(3003, () => {
  console.log("Server is up and listening on 3003");
})
