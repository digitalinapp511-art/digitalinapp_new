const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        ProjectId: {
            type: String,
            unique: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },

        category: {
            type: String,
            required: true,
            default: "Website Development",
        },

        client: {
            type: String,
            required: true,
            trim: true,
        },

        clientEmail: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },

        technology: {
            type: String,
            trim: true,
        },

        budget: {
            type: String,
            trim: true,
        },

        startDate: {
            type: Date,
        },

        due: {
            type: Date,
            required: true,
        },

        status: {
            type: String,
            enum: [
                "Planning",
                "Development",
                "Testing",
                "Completed",
            ],
            default: "Development",
        },

        priority: {
            type: String,
            enum: [
                "Low",
                "Medium",
                "High",
                "Urgent",
            ],
            default: "Medium",
        },

        team: [
            {
                type: String,
            },
        ],

        description: {
            type: String,
            trim: true,
        },

        progress: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
    },

    {
        timestamps: true,
    }
);

const projectModel = mongoose.model(
    "Project",
    projectSchema
);

module.exports = projectModel;