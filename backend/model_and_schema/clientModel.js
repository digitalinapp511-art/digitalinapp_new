const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        contact: {
            type: String,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        phone: {
            type: String,
            trim: true,
        },

        projects: {
            type: Number,
            default: 0,
        },

        status: {
            type: String,
            enum: ["Active", "Inactive"],
            default: "Active",
        },

        Totalvalue: {
            type: Number,
            default: 0,
        },

        lastBillPay: {
            type: Number,
            default: 0,
        },

        pendingAmount: {
            type: Number,
            default: 0,
        },

        companyType: {
            type: String,
            enum: ["Business", "Startup", "Individual", "Enterprise"],
            default: "Business",
        },

        notes: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const clientModel = mongoose.model("Client", clientSchema);

module.exports = clientModel;