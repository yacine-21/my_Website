const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
app.use(cors());
require('dotenv').config()
app.use(express.json()); // Add this line to parse the request body as JSON

app.post("/send-email", async (req, res) => {  
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.REACT_APP_MAIL,
          pass: process.env.REACT_APP_PASS
        }
      });
  
      const { from_name, reply_to, message } = req.body;
      const subject = `Demande de connexion from ${reply_to}`;
      const text = `Sender Name: ${from_name}\nSender Email: ${reply_to}\n\n${message}`;
  
      const info = await transporter.sendMail({
        from: process.env.REACT_APP_FROM,
        to: process.env.REACT_APP_FROM,
        subject: subject,
        text: text
      });
  
      console.log("Message sent: %s", info.messageId);
      res.send("Email sent successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while sending the email");
    }
  });
  

const PORT = process.env.REACT_APP_PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
