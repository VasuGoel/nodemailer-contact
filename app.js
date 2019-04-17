const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      path = require('path'),
      nodemailer = require('nodemailer');

// view engine setup
app.set('view engine', 'ejs');

// public directory setup
app.use('/public', express.static(path.join(__dirname, 'public')));

// body-parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// index route
app.get("/", (req, res) => {
    res.redirect("/contact");
});

// render contact form
app.get("/contact", (req, res) => {
    res.render("contact");
});