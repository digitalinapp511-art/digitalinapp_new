const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
            minlength: 6,
        },

        role: {
            type: String,
            enum: ["admin", "user"],
            default: "admin",
        },

        status: {
            type: String,
            enum: ["approval", "pending"],
            default: "pending",
        },
    },
    {
        timestamps: true,
    }
);

const Signup = mongoose.model("Signup", signupSchema);

module.exports = Signup;