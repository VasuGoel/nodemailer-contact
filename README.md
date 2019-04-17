# Nodemailer Contact Form

Nodemailer is a module for Node.js applications to allow sending emails between servers. When run the the route path redirects the user to contact route to render the contact page. Upon submission the data in request's body is send the the email address of the recipient via the sender's address.

## Getting Started

Start by either downloading the zip file or clone with HTTPS.

### Prerequisites

* Node 
* NPM
* Command-Line
* Code editor like Atom, VS Code
* A web browser like Safari, Google Chrome

## Running

#### Disclaimer - Change the transporter object to your personal preferences of SMTP transport

### 1. Install all dependencies
From your terminal, install all dependencies for the application.
```
npm install
```

### 2. Nodemailer configurations

##### Step 1: Require the following nodemailer package after installing
```
nodemailer = require('nodemailer')
```

##### Step 2: Create reusable transporter object using the default SMTP transport
```
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: 'true',
        auth: {
            user: 'YOURemail@service.com', // could use generated ethereal user
            pass: 'YOURpassword'  // could use generated ethereal password
        },
        // pass the following object to avoid rejectionUnauthorized issues if you're on localhost
        tls:{
          rejectUnauthorized:false
        }
    });
```

##### Step 3: Setup email data with unicode symbols
```
    let mailOptions = {
      from: '"Vasu Goel" <node.mailer.smtp@gmail.com>', // sender address
      to: 'elite.shivam23@gmail.com', // list of receivers
      subject: 'Hey! its me Vasu from the node app', // Subject line
      text: 'Hello world?', // plain text body
      html: <h1>Go crazy with the html HERE</h1> // html body
    };
```

##### Step 4: Send mail with defined transporter object
```
    transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);   
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
          res.redirect('/contact');
    });
```

### 3. Start a UNIX socket to listen for connections

##### For online IDE (check for its environment variables)
```
app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Server has started...");
});
```

##### For local IDE
```
app.listen(3000, () => {
    console.log("Servering requests on localhost:3000...");
});
```


## Built With

* [Node.js] (https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Express] (https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [Nodemailer] (https://nodemailer.com/about/) - Nodemailer is a module for Node.js applications to allow email sending
* [Javascript] (https://www.javascript.com/) - High-level, interpreted programming language
* [HTML] (https://www.html.com/) - Standard markup language
* [Semantic UI] (https://semantic-ui.com/) - Semantic UI is a UI component framework for theming websites.

## Authors

* **Vasu Goel** (https://github.com/VasuGoel)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/VasuGoel/nodemailer-contact/blob/master/LICENSE) file for details

## Acknowledgments

* Adding emailing facility to my website

