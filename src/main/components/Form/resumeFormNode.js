
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "mail",
  auth: {
    user: "arti.zavodov@mail.ru",
    pass: "aaa416aaa",
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "arti.zavodov@mail.ru",
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error sending email!" });
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
