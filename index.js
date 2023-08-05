// Import the required modules
const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'Your_Email_Service',
  auth: {
    user: 'your_email@example.com',
    pass: 'your_email_password'
  }
});

// Define the email options with attachments
const mailOptions = {
  from: 'your_email@example.com',
  to: 'recipient@example.com',
  subject: 'Testing Nodemailer - Email with Attachment',
  text: 'Hello, this email contains an attachment!',
  attachments: [
    {
      filename: 'attachment.txt',
      content: 'This is the content of the attachment.'
    }
  ]
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
