const express = require("express");
const app = express();
const path  = require("path");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const SMTPConnection = require("nodemailer/lib/smtp-connection");

dotenv.config();

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

app.use(express.urlencoded({extended: true}), express.static(path.join(__dirname, "public")));

app.post("/email-enviado", express.json(), (req, res)=>{
    let email = req.body.email;
    let message = req.body.message;

    transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: "Assunto WillWeb",
        text: message,
    }).then((info)=>{
        console.log(info);
        res.send("Email enviado com sucesso")
    }).catch((error)=>{
        console.log(error);
        res.send("Erro ao enviar o email")
    })
})
.listen(3000, ()=>{
    console.log("Server running..")
})