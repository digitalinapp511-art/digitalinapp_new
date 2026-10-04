const express = require('express')
const dotenv = require("dotenv");
dotenv.config();
const contactFormRoute = require("./routes/contactFormRoute")
const blogRoute = require('./routes/blogRoute')
<<<<<<< HEAD
const projectRoute = require('./routes/projectRoute')
const teamMemberRoute = require('./routes/TeamRoute')
const clientRoute = require('./routes/clientRoute')
const loginRoute = require('./routes/loginRoute')
const dashboardRoute = require('./routes/dashboardRoute')
=======

>>>>>>> bcbe85cfaa96d8781fd58698680934e3d464ea1f
const mongoose = require('mongoose')
const app = express();
const himanshudB = require('./config/dbConfig')
const transporter = require('./config/nodemailerConfig')
const cors = require('cors')


app.use(express.json())
app.use(cors());

<<<<<<< HEAD
app.use('/api', dashboardRoute)
app.use('/api', contactFormRoute)
app.use("/api", blogRoute)
app.use("/api", teamMemberRoute)
app.use('/api', projectRoute)
app.use('/api', clientRoute)
app.use('/api', loginRoute)
=======

app.use('/api', contactFormRoute)
app.use("/api", blogRoute)

>>>>>>> bcbe85cfaa96d8781fd58698680934e3d464ea1f





app.get('/', (req, res) => {
    res.send('Home page runing...')
})
app.listen(process.env.PORT, () => {
    console.log(`server is runing ${process.env.PORT}`)
<<<<<<< HEAD
})
=======
})
>>>>>>> bcbe85cfaa96d8781fd58698680934e3d464ea1f
