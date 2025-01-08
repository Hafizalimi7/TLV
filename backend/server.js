const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


 
// Your GoDaddy email credentials
const godaddyEmail = 'tanyllet@outlook.com';
const godaddyPassword = 'yoursword';

// Setting up the transporter


  const mailTransport = nodemailer.createTransport({    
      host: "smtpout.secureserver.net",  
      secure: true,
      secureConnection: false, // TLS requires secureConnection to be false
      tls: {
          ciphers:'SSLv3'
      },
      requireTLS:true,
      port: 465,
      debug: true,
      auth: {
          user: "info@thelifevoyage.com",
          pass: "vqwtz" 
      }
});



const mailOptions = {
  from: ``,
  to: `info@thelifevoyage.com`,
  subject: `This is a Test Subject`,
  text: `Hi Anudeep    

  Happy  !

  If you need any help, please contact us.
  Thank You. And Welcome!

  Support Team
  `,

};

mailTransport.sendMail(mailOptions).then(() => {
  console.log('Email sent successfully');
}).catch((err) => {
  console.log('Failed to send email');
  console.error(err);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



