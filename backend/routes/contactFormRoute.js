const express = require('express')
const router = express.Router()
const enquiryModel = require('../model_and_schema/enquiryModel')
const fs = require("fs");
const path = require("path");
const transporter = require('../config/nodemailerConfig')


router.post('/send-mail', async (req, res) => {
    try {

        const fromData = req.body;

        // console.log(fromData)

        // =========================
        // VALIDATION
        // =========================

        if (!fromData.name) {
            return res.status(400).json({
                success: false,
                message: "Please enter your name",
            });
        }

        if (!fromData.Phone) {
            return res.status(400).json({
                success: false,
                message: "Please enter your phone number",
            });
        }

        if (!fromData.email) {
            return res.status(400).json({
                success: false,
                message: "Please enter your email",
            });
        }

        if (!fromData.date) {
            return res.status(400).json({
                success: false,
                message: "Please select a date",
            });
        }

        if (!fromData.time) {
            return res.status(400).json({
                success: false,
                message: "Please select a time",
            });
        }

        if (!fromData.service) {
            return res.status(400).json({
                success: false,
                message: "Please select a service",
            });
        }

        if (!fromData.details) {
            return res.status(400).json({
                success: false,
                message: "Please enter your message",
            });
        }


        // =========================
        // READ HTML TEMPLATE
        // =========================

        let htmlTemplate = fs.readFileSync(
            path.join(__dirname, "..", "templates", "contact-email.html"),
            "utf8"
        );

        // =========================
        // REPLACE TEMPLATE VALUES
        // =========================

        htmlTemplate = htmlTemplate
            .replace(/{{username}}/g, fromData.name)
            .replace(/{{phone}}/g, fromData.Phone)
            .replace(/{{email}}/g, fromData.email)
            .replace(/{{preferred_date}}/g, fromData.date)
            .replace(/{{preferred_time}}/g, fromData.time)
            .replace(/{{service}}/g, fromData.service)
            .replace(/{{message}}/g, fromData.details)
            .replace(/{{budget}}/g, fromData.budget);


        //===============
        // Send email
        //===============

        await transporter.sendMail({

            from: process.env.EMAILID,

            to: process.env.EMAILID,

            subject: "New Contact Enquiry",

            html: htmlTemplate
        });
        const newEnquiry = new enquiryModel({
            username: fromData.name,
            phoneNumber: fromData.Phone,
            email: fromData.email,
            preferredDate: fromData.date,
            preferredTime: fromData.time,
            serviceInterest: fromData.service,
            indicativeBudget: fromData.budget,
            message: fromData.details
        })
        const saveEnquiry = await newEnquiry.save()
        console.log("Email sent successfully")
        // =========================
        // SUCCESS RESPONSE
        // =========================

        return res.status(200).json({
            success: true,
            message: "Email sent successfully"
        });



    } catch (error) {
        console.error("Email Error:", error);
        res.status(400).json({
            success: false,
            message: "Email send faild...."
        })
    }

})
module.exports = router;