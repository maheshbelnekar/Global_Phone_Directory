// load our application using express
const express = require( 'express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql')
const bodyParser = require('body-parser')

// Serving all files from the public directory
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: false}))

// Use morgan to log server requests
app.use(morgan('short'))

// function to establish connection with the database
function getConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'my_directory'
  });
  
}

// Configure your routes/ GET requests here

// Route to return a certain user based on id
app.get("/user/:id",(req,res) => {
  console.log("Fetching user with id: " + req.params.id);

  const connection = getConnection()

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
  const connection = getConnection()

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


// Configure your routes for POST requests here

// Post route to add a user to the phone directory
app.post('/user_create',(req,res) => {
  console.log(" Adding new user ")

  // parse data from html form
  const firstName = req.body.createFirstName
  const lastName = req.body.createLastName
  const phone = req.body.createPhoneNumber

  // insert into table
  const connection = getConnection()
  const queryString = "insert into users (first_name,last_name,phone) values (?,?,?)"
  connection.query(queryString,[firstName,lastName,phone],(err,res,fields) => {
    if (err) {
      console.log("Failed to insert user")
      res.sendStatus(500)
      return      
    }
    else{
      console.log("Inserted new user with id: " + res.insertId );
    }
  })

  res.end()
})

// Running on localhost:3000
app.listen(3003, () => {
  console.log("Server is up and listening on 3003");
})
