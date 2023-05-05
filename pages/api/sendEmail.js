// pages/api/sendEmail.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "florent.lelubez@gmail.com",
    subject: `Nouveau message de ${name}, ${email}`,
    text: `email : ${email}
          message:${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Mail sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error went sending mail" });
  }
}
