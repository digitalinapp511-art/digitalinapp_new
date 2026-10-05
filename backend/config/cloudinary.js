const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

cloudinary.api.ping((error, result) => {
    if (error) {
        console.log("❌ Cloudinary Authentication Failed");
        console.log(error.message);
    } else {
        console.log("✅ Cloudinary Connected Successfully");
        console.log(result);
    }
});


console.log("========== CLOUDINARY CONFIG ==========");
console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
console.log(
    "API Key Loaded:",
    !!process.env.CLOUDINARY_API_KEY
);
console.log(
    "API Secret Loaded:",
    !!process.env.CLOUDINARY_API_SECRET
);

module.exports = cloudinary;