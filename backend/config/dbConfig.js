const mongoose = require('mongoose')

const himanshudB = mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("db is conncted")
    })
    .catch((err) => {
        console.log(`db not connected ${err}`)
    });

module.exports = himanshudB

