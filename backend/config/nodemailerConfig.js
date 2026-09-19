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
module.exports = transporter;