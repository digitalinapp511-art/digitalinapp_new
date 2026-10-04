const nodemailer = require('nodemailer')
const express = require('express')
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAILId,
        pass: process.env.EMAILPASS,
    },
});
<<<<<<< HEAD

transporter.verify((error, success) => {

    if (error) {
        console.log("❌ Gmail Authentication Failed");
        console.log(error.message);
    } else {
        console.log("✅ Gmail Authentication Successful");
        console.log("📧 SMTP server is ready to send emails");
    }

});
=======
>>>>>>> bcbe85cfaa96d8781fd58698680934e3d464ea1f
module.exports = transporter;