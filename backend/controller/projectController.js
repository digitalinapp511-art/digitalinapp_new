const express = require('express')
const projectModel = require('../model_and_schema/projectModel')
const transporter = require('../config/nodemailerConfig')
const fs = require("fs");
const path = require("path");

const addProject = async (req, res) => {
    const newProject = req.body
    const generateProjectId = () => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        const randomLetters =
            letters[Math.floor(Math.random() * letters.length)] +
            letters[Math.floor(Math.random() * letters.length)];

        const randomNumbers = Math.floor(10 + Math.random() * 90);

        return `PRJ${randomLetters}${randomNumbers}`;
    };

    const ProjectId = generateProjectId();

    try {
        if (!newProject) {
            return res.status(401).json({
                success: false,
                message: "data not comeing..."
            })
        }
        // Add ProjectId to project data

        newProject.ProjectId = ProjectId;

        // =========================
        // READ HTML TEMPLATE
        // =========================

        let htmlTemplate = fs.readFileSync(
            path.join(
                __dirname,
                "..",
                "templates",
                "Project-email.html"
            ),
            "utf8"
        );
        // =========================
        // REPLACE TEMPLATE VALUES
        // =========================

        const finalHtml = htmlTemplate
            .replace(/{{client}}/g, newProject.client)
            .replace(/{{ProjectId}}/g, newProject.ProjectId)
            .replace(/{{title}}/g, newProject.title)


        const newMail = await transporter.sendMail({
            from: `"Digital In App™" <${process.env.EMAILID}>`,
            to: newProject.clientEmail,
            subject: 'Project Added - Digital In App',
            html: finalHtml
        })

        const saveProject = await projectModel.create(newProject)
        res.status(200).json({
            success: true,
            message: "Project added Successfuly",
            saveProject
        })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            success: false,
            message: error.message || "somethng went worng"
        })
    }
}

const getProject = async (req, res) => {

    try {
        const AllProject = await projectModel.find({})
        res.status(200).json({
            success: true,
            message: "Project finded Successfuly",
            AllProject
        })
    } catch (error) {
        console.log(error.message)
        res.status(401).json({
            success: false,
            message: error.message || "somethng went worng"
        })
    }
}

const deleteProject = async (req, res) => {
    const id = req.params.id
    try {
        const deleteProject = await projectModel.findOneAndDelete({ _id: id })
        if (!deleteProject) {
            return res.status(500).json({
                success: false,
                messsage: "user Record not found",

            })
        }
        res.status(201).json({
            success: true,
            message: `Project ${deleteProject.title} successfuly delete`,
            deleteProject
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            messsage: `"something Went worng...": ${error.message}`,

        })
    }
}
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedProject = await projectModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      project: updatedProject,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  updateProject,
};

module.exports = { addProject, getProject, deleteProject,updateProject };