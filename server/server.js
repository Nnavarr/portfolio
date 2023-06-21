const express = require('express');
const sendEmail = require('./utils/email');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config()

// instantiate express object
const PORT = process.env.PORT || 3001;
const app = express();

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

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

app.listen(PORT, () => {
  console.log(`The express server is listening on port ${PORT}`)
})
