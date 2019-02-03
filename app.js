// load our application using express
const express = require( 'express');
const app = express();

// configure GET request
app.get("/",(req,res) => {
  console.log("Responding to root route");
  res.send("Hello from ROOT");
})

// Running on localhost:3000
app.listen(3003, () => {
  console.log("Server is up and listening on 3003");
})
