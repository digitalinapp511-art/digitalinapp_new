const express = require("express")
const blogModel = require('../model_and_schema/blogModel');



/////////////////////////////
// BLOG POST CREATE CODE HERE
/////////////////////////////



const createBlog = async (req, res) => {
    try {
        console.log("========== CREATE BLOG ==========");
        console.log("BODY:", req.body);
        console.log("FILE:", req.file);

        const {
            title,
            slug,
            category,
            shortDescription,
            content,
            featured,
            publishDate,
            readTime,
            author,
            tags,
            status,
        } = req.body;

        // Required validation
        if (!title || !slug || !content) {
            return res.status(400).json({
                success: false,
                message: "Title, slug and content are required",
            });
        }

        // -------------------------
        // Parse Tags
        // -------------------------
        let parsedTags = [];

        if (tags) {
            try {
                parsedTags = JSON.parse(tags);

                if (!Array.isArray(parsedTags)) {
                    parsedTags = [];
                }
            } catch (err) {
                parsedTags = tags
                    .split(",")
                    .map((tag) => tag.trim())
                    .filter(Boolean);
            }
        }

        // -------------------------
        // Cloudinary Image
        // -------------------------
        let coverImage = "";

        if (req.file) {
            console.log("Uploaded File:", req.file);

            coverImage =
                req.file.path ||
                req.file.secure_url ||
                "";

            console.log("Cloudinary URL:", coverImage);
        }

        // -------------------------
        // Create Blog
        // -------------------------
        const addblog = await blogModel.create({
            title,
            slug,
            category,
            shortDescription,
            content,

            featured:
                featured === "true" ||
                featured === true,

            publishDate:
                publishDate
                    ? new Date(publishDate)
                    : null,

            readTime: Number(readTime),

            coverImage,

            author: author || "Admin",

            tags: parsedTags,

            status: status || "draft",
        });

        console.log("BLOG CREATED:", addblog);

        return res.status(201).json({
            success: true,
            message: "Blog created successfully",
            addblog,
        });

    } catch (error) {

        console.error("========== CREATE BLOG ERROR ==========");
        console.error(error);
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);

        // Duplicate slug
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Slug already exists",
            });
        }

        return res.status(500).json({
            success: false,
            message: error.message || "Failed to create blog",
        });
    }
};
/////////////////////////////
// BLOG POST FETCH CODE HERE
/////////////////////////////

const getAllBlogs = async (req, res) => {
    const allBlog = await blogModel.find()
    if (!allBlog) {
        res.status(400).json({
            message: "blog not found"
        })
    }

    res.status(200).json({
        allPost: allBlog
    })
}
/////////////////////////////
//Latest BLOG find
/////////////////////////////

const getLatestBlog = async (req, res) => {
    try {
        const latestBlog = await blogModel
            .find({ status: "published" })
            .sort({ createdAt: -1 })
            .limit(5);

        res.status(200).json({
            success: true,
            message: "Latest blogs fetched successfully",
            latestBlog
        });

    } catch (error) {
        console.log("Latest Blog Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch latest blogs"
        });
    }
};


/////////////////////////////
// BLOG POST FETCH BY SLUG CODE HERE
/////////////////////////////

const getBlogBySlug = async (req, res) => {
    try {
        const { slug } = req.params;

        const blog = await blogModel.findOne({
            slug: slug,
            status: "published",
        });
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }

        res.status(200).json({
            success: true,
            blog,
        });
        console.log(blog)
    } catch (error) {
        console.log("Get Blog Error:", error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


/////////////////////////////
// BLOG DELTED CODE HERE
/////////////////////////////

const getFindblogAndDelete = async (req, res) => {
    const { id } = req.params;
    console.log(id)

    try {
        const deleteBlog = await blogModel.findOneAndDelete({ _id: id })
        res.status(200).json({
            success: true,
            message: 'i have sucdesfuly DELTEED YOUR BLOG',
            abhay: deleteBlog
        })
    } catch (error) {
        res.status(400).json({
            message: 'blog not found'
        })
    }

    // const findDeleteBlog = await blogModel.findOneAndDelete({ slug:})
}
module.exports = {
    createBlog,
    getBlogBySlug,
    getAllBlogs,
    getFindblogAndDelete
}