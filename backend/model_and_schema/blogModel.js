const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    category: {
      type: String,
      trim: true,
    },

    shortDescription: {
      type: String,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    publishDate: {
      type: Date,
    },

    readTime: {
      type: Number,
      min: 1,
    },

    coverImage: {
      type: String,
      default: "",
    },

    author: {
      type: String,
      default: "Admin",
    },

    tags: {
      type: [String],
      default: [],
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);