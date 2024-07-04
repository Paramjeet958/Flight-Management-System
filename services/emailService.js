// // services/emailService.js
// const { google } = require('googleapis');
// const nodemailer = require('nodemailer');


// const clientId =  '503410003391-egulvbboa00ok7q9g2ftjun7npi6g3ie.apps.googleusercontent.com';
// const clientSecret= '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';
// const refreshToken =  '1//04Vcd-_dWe7VrCgYIARAAGAQSNwF-L9IrON8cx_OmGLV5x55xUoenAsVoUM6waLKYdGunmvo3x11Jhof8hDihIrMfK37zUXutEIM';
// const redirect_uri = 'https://developers.google.com/oauthplayground';
// const OAuth2 = google.auth.OAuth2;
// const oauth2Client = new OAuth2(
//   '503410003391-egulvbboa00ok7q9g2ftjun7npi6g3ie.apps.googleusercontent.com', //clientid
//   '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',// secret
//   'https://developers.google.com/oauthplayground' // e.g., 'https://developers.google.com/oauthplayground'
// );

// oauth2Client.setCredentials({
//   refresh_token: '1//04Vcd-_dWe7VrCgYIARAAGAQSNwF-L9IrON8cx_OmGLV5x55xUoenAsVoUM6waLKYdGunmvo3x11Jhof8hDihIrMfK37zUXutEIM',//'YOUR_REFRESH_TOKEN',
// });

// async function sendMail(email) {
//   try {
//     const accessToken = await oauth2Client.getAccessToken();

//     const transport = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: 'ssabrup@gmail.com',
//         clientId: '503410003391-egulvbboa00ok7q9g2ftjun7npi6g3ie.apps.googleusercontent.com',
//         clientSecret: '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',
//         refreshToken: '1//04Vcd-_dWe7VrCgYIARAAGAQSNwF-L9IrON8cx_OmGLV5x55xUoenAsVoUM6waLKYdGunmvo3x11Jhof8hDihIrMfK37zUXutEIM',
//         accessToken: accessToken.token,
//       },
//     });

//     const mailOptions = {
//       from: 'Wing Ding-Flight-Management-system <ssabrup@gmail.com>',
//       to: email,
//       subject: "Hello from Wing Ding",
//       text: "You Have successfully registered.",
//       html: "<h1>You Have successfully registered</h1>"
//     };

//     const result = await transport.sendMail(to);
//     return result;
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw error;
//   }
// }

// module.exports = { sendMail };

const { google } = require('googleapis');
const nodemailer = require('nodemailer');

const clientId = '503410003391-egulvbboa00ok7q9g2ftjun7npi6g3ie.apps.googleusercontent.com';
const clientSecret = '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';
const refreshToken = '1//04Vcd-_dWe7VrCgYIARAAGAQSNwF-L9IrON8cx_OmGLV5x55xUoenAsVoUM6waLKYdGunmvo3x11Jhof8hDihIrMfK37zUXutEIM';
const redirectUri = 'https://developers.google.com/oauthplayground';

const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  clientId, 
  clientSecret, 
  redirectUri 
);

oauth2Client.setCredentials({
  refresh_token: refreshToken,
});

async function sendMail(to, subject, text, html) {
  try {
    const accessToken = await oauth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'ssabrup@gmail.com',
        clientId: clientId,
        clientSecret: clientSecret,
        refreshToken: refreshToken,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: 'Wing Ding-Flight-Management-system <ssabrup@gmail.com>',
      to: to,
      subject: subject,
      text: text,
      html: html,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

module.exports = { sendMail };
