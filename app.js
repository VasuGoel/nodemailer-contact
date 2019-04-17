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

// post route
app.post("/contact", (req, res) => {
    const output = `
        <p>Hello,<p>
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>  
            <li>Name: ${req.body.firstname + " " + req.body.lastname}</li>
            <li>Phone: ${req.body.phone}</li>
            <li>Email: ${req.body.email}</li>
            <li>Subject: ${req.body.subject}</li>
        </ul>
        <h3>Message:</h3>
        <p>${req.body.message}</p>
    `
    
    
});