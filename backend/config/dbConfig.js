const mongoose = require('mongoose')

const himanshudB = mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("db is conncted")
    })
    .catch((err) => {
        console.log(`db not connected ${err}`)
    });

<<<<<<< HEAD

=======
>>>>>>> bcbe85cfaa96d8781fd58698680934e3d464ea1f
module.exports = himanshudB

