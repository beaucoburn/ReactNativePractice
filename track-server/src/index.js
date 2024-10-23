const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUri = 'mongodb+srv://hello:1D4Ke9ofXippUZUh@cluster0.fp4wh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
})

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
