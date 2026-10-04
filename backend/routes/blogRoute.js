const express = require("express");
const upload = require("../middleware/upload");

const router = express.Router();

const {
    createBlog,
    getAllBlogs,
    getBlogBySlug,
    getFindblogAndDelete
} = require("../controller/blogController");

router.post(
    "/create/blog",

    upload.single("coverImage"),

    createBlog
);
router.delete('/blog/delete/:id',getFindblogAndDelete)
router.get("/latest-blog", getAllBlogs);
router.get("/blogs", getAllBlogs);
router.get("/blog/:slug", getBlogBySlug);
// ERROR HANDLER
router.use((err, req, res, next) => {
    console.error("========== BLOG UPLOAD ERROR ==========");
    console.error(err);
    console.error("MESSAGE:", err.message);

    return res.status(500).json({
        success: false,
        message: err.message || "Image upload failed",
    });
});

module.exports = router





