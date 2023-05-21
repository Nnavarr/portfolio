import express from 'express';
import nodemailer from 'nodemailer';

// instantiate express object
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`The express server is listening on port ${port}`)
})