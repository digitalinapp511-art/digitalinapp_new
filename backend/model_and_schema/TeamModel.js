const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    EmpId: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    assigned: {
        type: String,
        required: false,
        trim: true,
    },
    role: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    image: {
        type: String,
        default: ""
    },
    phone: {
        type: String,
        unique: true,
        trim: true,
        default: ""

    },

    department: {
        type: String,
        trim: true,
        default: "",
    },
    status: {
        type: String,
        enum: ["Active", "Inactive", "Leave"],
        default: "Active",
    },

    skills: {
        type: [String],
        default: [],
    },

    joinedDate: {
        type: Date,
        default: Date.now,
    },
},
    {
        timestamps: true,
    })

const teamModel = mongoose.model('Team', teamSchema)

module.exports = teamModel