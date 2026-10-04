const express = require('express')
const teamModel = require('../model_and_schema/TeamModel');
const transporter = require('../config/nodemailerConfig');
const { default: nodemailer } = require('nodemailer');
const fs = require("fs");
const path = require("path");


// const addTeamMember = async (req, res) => {
//     try {
//         const memberData = req.body;

//         // Check body
//         if (!memberData || Object.keys(memberData).length === 0) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Fill member details..."
//             });
//         }
//         // Duplicate email
//         const emailExists = await teamModel.findOne({ email: memberData.email })
//         if (emailExists) {
//             return res.status(401).json({
//                 success: false,
//                 message: 'Email already exists'
//             })
//         }
//         // Duplicate phone
//         const phoneExists = await teamModel.findOne({ phone: memberData.phone })
//         if (phoneExists) {
//             return res.status(401).json({
//                 success: false,
//                 message: "Phone number already exists"
//             })
//         }
//         if (phoneExists || emailExists) {
//             return res.status(401).json({
//                 success: false,
//                 message: "Email and Phone already exists"
//             })
//         }
//         // =========================
//         // READ HTML TEMPLATE
//         // =========================

//         let htmlTemplate = fs.readFileSync(
//             path.join(__dirname, "..", "templates", "WelcomeTeplate.html"),
//             "utf8"
//         );

//         // =========================
//         // REPLACE TEMPLATE VALUES
//         // =========================

//         const finalHtml = htmlTemplate
//             .replace(/{{username}}/g, memberData.name)
//             .replace(/{{EmpId}}/g, memberData.EmpId)
//             .replace(/{{role}}/g, memberData.role)
//             .replace(/{{department}}/g, memberData.department)
//             .replace(/{{email}}/g, memberData.email)
//             .replace(/{{phone}}/g, memberData.phone || "Not Provided")
//             .replace(
//                 /{{joinedDate}}/g,
//                 new Date(memberData.joinedDate).toLocaleDateString("en-IN")
//             )
//             .replace(/{{department}}/g, memberData.department);



// const newmail = await transporter.sendMail({
//     from: `"Digital In App™" <${process.env.EMAILID}>`,
//     to: memberData.email,
//     subject: "🎉 Welcome to Digital In App™",
//     html: finalHtml

// })
// console.log(newmail)
// // Create and save member
// const saveMember = await teamModel.create(memberData);

// return res.status(201).json({
//     success: true,
//     message: "Member added successfully",
//     saveMember
// });

//     } catch (error) {
//     console.log(error);

//     return res.status(500).json({
//         success: false,
//         message: error.message || "Failed to create team member"
//     });
// }
// };
const addTeamMember = async (req, res) => {
    try {

        const memberData = req.body;

        // =========================
        // CHECK BODY
        // =========================

        if (
            !memberData ||
            Object.keys(memberData).length === 0
        ) {
            return res.status(400).json({
                success: false,
                message: "Fill member details..."
            });
        }


        // =========================
        // DUPLICATE EMAIL
        // =========================

        const emailExists = await teamModel.findOne({
            email: memberData.email
        });

        if (emailExists) {
            return res.status(401).json({
                success: false,
                message: "Email already exists"
            });
        }


        // =========================
        // DUPLICATE PHONE
        // =========================

        if (memberData.phone) {

            const phoneExists = await teamModel.findOne({
                phone: memberData.phone
            });

            if (phoneExists) {
                return res.status(401).json({
                    success: false,
                    message: "Phone number already exists"
                });
            }
        }


        // =========================
        // CLOUDINARY IMAGE
        // =========================

        if (req.file) {
            memberData.image = req.file.path;
        }


        // =========================
        // READ HTML TEMPLATE
        // =========================

        let htmlTemplate = fs.readFileSync(
            path.join(
                __dirname,
                "..",
                "templates",
                "WelcomeTeplate.html"
            ),
            "utf8"
        );


        // =========================
        // REPLACE TEMPLATE VALUES
        // =========================

        const finalHtml = htmlTemplate

            .replace(
                /{{username}}/g,
                memberData.name
            )

            .replace(
                /{{EmpId}}/g,
                memberData.EmpId
            )

            .replace(
                /{{role}}/g,
                memberData.role
            )

            .replace(
                /{{department}}/g,
                memberData.department
            )

            .replace(
                /{{email}}/g,
                memberData.email
            )

            .replace(
                /{{phone}}/g,
                memberData.phone || "Not Provided"
            )

            .replace(
                /{{joinedDate}}/g,
                new Date(
                    memberData.joinedDate
                ).toLocaleDateString("en-IN")
            );


        // =========================
        // CREATE AND SAVE MEMBER
        // =========================

        const saveMember =
            await teamModel.create(memberData);


        // =========================
        // SEND WELCOME EMAIL
        // =========================

        const newmail =
            await transporter.sendMail({

                from:
                    `"Digital In App™" <${process.env.EMAILID}>`,

                to: memberData.email,

                subject:
                    "🎉 Welcome to Digital In App™",

                html: finalHtml
            });


        console.log(newmail);


        // =========================
        // RESPONSE
        // =========================

        return res.status(201).json({
            success: true,
            message: "Member added successfully",
            saveMember
        });


    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message:
                error.message ||
                "Failed to create team member"
        });
    }
};
const getTeamMember = async (req, res) => {
    try {
        const allTeamMember = await teamModel.find().sort({ createdAt: -1 });
        if (!allTeamMember) {
            res.status(401).json({
                message: 'record not found',
                success: false
            })
        }
        res.status(201).json({
            message: 'finded.....',
            allTeamMember,
            success: true
        })
    } catch (error) {

        res.status(401).json({
            message: 'record not found',
            success: false

        })

    }
}
const deleteTeamMember = async (req, res) => {
    const id = req.params.id
    try {
        const deleteMember = await teamModel.findOneAndDelete({ _id: id })
        if (!deleteMember) {
            return res.status(500).json({
                success: false,
                messsage: "user Record not found",

            })
        }
        res.status(201).json({
            success: true,
            message: `User ${deleteMember.name} Member successfuly delete`,
            deleteMember
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            messsage: `"something Went worng...": ${error.message}`,

        })
    }
}
const getOneTeamMember = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        const oneTeamMember = await teamModel.findOne({ _id: id })
        if (!oneTeamMember) {
            res.status(401).json({
                message: 'record not found',
                success: false
            })
        }
        res.status(201).json({
            message: 'finded.....',
            oneTeamMember,
            success: true
        })
    } catch (error) {

        res.status(401).json({
            message: 'record not found',
            success: false

        })

    }
}
module.exports =
{
    addTeamMember,
    getTeamMember,
    deleteTeamMember,
    getOneTeamMember
}