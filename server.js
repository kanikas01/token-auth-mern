const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const mongo_uri = 'mongodb://localhost/react-auth';
const User = require('./models/User.js');

// Middleware
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({   // to support URL-encoded bodies
  extended: true
}));

// Routes
app.get('/api/home', function(req, res) {
  res.send('Welcome!');
});

app.get('/api/secret', function(req, res) {
  res.send('The password is potato');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// POST route to register a user
app.post('/api/register', function(req, res) {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save(function(err) {
    if (err) {
      res.status(500)
        .send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

// Connect MongoDB
mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

app.listen(process.env.PORT || 3001);
