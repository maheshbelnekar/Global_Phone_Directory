// load our application using express
const express = require( 'express');
const app = express();
const morgan = require('morgan');

// Use morgan to log server requests
app.use(morgan('short'))

// Configure your routes here

// configure GET request
app.get("/",(req,res) => {
  console.log("Responding to root route");
  res.send("Hello from ROOT");
})

app.get("/users",(req,res) => {
  console.log("Responding to users route");
  // We pass some JSON
  var user1 = {firstname:"Mahesh", LastName: "Belnekar"}
  var user2 = {firstname:"Tom", LastName: "Hanks"}
  res.json([user1,user2])
  //res.send("Hello from Users");
})


// Running on localhost:3000
app.listen(3003, () => {
  console.log("Server is up and listening on 3003");
})
