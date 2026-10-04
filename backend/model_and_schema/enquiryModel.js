const mongoose = require('mongoose')

const enquirySchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },

        phoneNumber: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },

        preferredDate: {
            type: Date,
            required: true,
        },

        preferredTime: {
            type: String,
            required: true,
        },

        serviceInterest: {
            type: String,
            required: true,
        },

        indicativeBudget: {
            type: String,
            required: true,
        },

        message: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
)
const Enquiry = new mongoose.model('Enquiry', enquirySchema)

module.exports = Enquiry;