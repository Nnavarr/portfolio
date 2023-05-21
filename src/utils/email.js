const nodemailer = require('nodemailer');
const path = require('path');
const { google } = require('googleapis');
const dotenv = require('dotenv');

const OAuth2 = google.auth.OAuth2;

// import environment variables
dotenv.config({ path: path.resolve(__dirname, '../../.env')});

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject();
      }
      resolve(token);
    });
  });

  console.log(accessToken)

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_USERNAME,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  return transporter;
};

// send email 
const sendEmail = async (emailOptions) => {
  let emailTransporter = await createTransporter();
  await emailTransporter.sendMail(emailOptions);
}

sendEmail({
  subject: 'Test',
  text: 'This is a test',
  to: 'nnavarro.eontech@gmail.com',
  from: process.env.EMAIL_USERNAME
})