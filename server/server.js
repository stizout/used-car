const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const axios = require('axios');
const nodemailer = require('nodemailer')

const app = express();

app.use(cors());
app.use(bodyParser.json());
require('dotenv').config();
massive(process.env.CONNECTION_STRING).then(database => app.set('db', database)).catch(err => console.log('error with massive', err));

app.use( express.static( `${__dirname}/../build` ) );

app.get('/selectCar', (req, res) => {
    console.log('hit Select Car Page')
    req.app.get('db').get_makes().then(makes => {
        res.json(makes)
        res.status(200)
    }).catch(err => console.log('Error on selectCar', err))
})

app.get('/selectModel/:id', (req, res) => {
    console.log('Hit Select Model')
    req.app.get('db').get_models(+req.params.id).then(models => {
        res.json(models)
        res.status(200)
    }).catch(err => console.log('Error on selectModel', err))
})

app.post('/select/complaint', (req, res) => {
    function getData() {
         
        return axios.get(req.body.url)
    }
    getData().then(response => {
        res.json(response.data)
    })
})

app.post('/api/contact', (req, res) => {
    console.log('Order Email Hit', req.body)
        const htmlEmail = `
            <div style="background:#E0E0E0; padding:25px;">
                <h1 style="padding:25px;margin-bottom:-10px;" >Contact Details</h1>
                <ul style="font-size:24px;list-style:none;">
                    <li>Name: ${req.body.name}</li>
                    <li>Email: ${req.body.email}</li>
                </ul>
                <h2 style="font-size:24px;">Message:</h2>
                <p style="padding:25px;font-size:18px;">${req.body.message}</p>
                
            </div>
        `
        var smtpTransport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: { 
                type: "OAuth2",
                user: "stizout@gmail.com", // Your gmail address.
                clientId: process.env.GMAIL_KEY,
                clientSecret: process.env.GMAIL_SECRET,
                refreshToken: process.env.GMAIL_TOKEN,
              
            }
          });
          
          var mailOptions = {
            from: 'carcomplaints@gmail.com', // sender address
            to: 'stizout@gmail.com',
            subject: 'New Complaint', // Subject line
            text: req.body.message, // plaintext body
            html: htmlEmail
          };
          
          smtpTransport.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log('Error sending mail', error)
            } else {
              console.log('Message sent successfully! %s sent: %s', info.messageId, info.response);
            }
            smtpTransport.close();
          });

})

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})



app.listen(4000, () => console.log('Server Running 🏎'))