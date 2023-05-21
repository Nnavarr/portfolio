const express = require('express');
const nodemailer = require('nodemailer');
const sendEmail = require('./utils/email');

// instantiate express object
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  // TODO: create function to call email 
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`The express server is listening on port ${port}`)
})