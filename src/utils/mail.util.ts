import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

export const sendEmail = async (body) => {
    const mailOptions = {
      from: `"Online Book Store" <${process.env.SMTP_USER}>`, 
      to: body, 
      subject: 'Responce Online Book Store', 
      text: 'This is a email sent from Book Store your Order is Placed Sussecfully', 
      html: '<b>This is a test email sent from Node.js</b>', 
    };
  
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
      return info;
    } catch (error) {
      console.error('Error sending email: ', error);
      throw error;
    }
  };