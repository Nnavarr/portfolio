const express = require('express');
const sendEmail = require('./utils/email');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config()

// instantiate express object
const app = express();
app.use(cors());
app.use(express.json())
const port = 3001;

app.post('/sendEmail', async (req, res) => {
  const { subject, text, from } = req.body;

  try {
    await sendEmail({
      subject,
      text,
      to: process.env.EMAIL_USERNAME,
      from
    });
    res.status(200).send({"Success": "Email sent successfully"});
  } catch {
    res.status(500).send({"Error": 'Error sending email'});
  }
});

app.listen(port, () => {
  console.log(`The express server is listening on port ${port}`)
})
