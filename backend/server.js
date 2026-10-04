const express = require('express')
const dotenv = require("dotenv");
dotenv.config();
const contactFormRoute = require("./routes/contactFormRoute")
const blogRoute = require('./routes/blogRoute')
const projectRoute = require('./routes/projectRoute')
const teamMemberRoute = require('./routes/TeamRoute')
const clientRoute = require('./routes/clientRoute')
const loginRoute = require('./routes/loginRoute')
const dashboardRoute = require('./routes/dashboardRoute')
const mongoose = require('mongoose')
const app = express();
const himanshudB = require('./config/dbConfig')
const transporter = require('./config/nodemailerConfig')
const cors = require('cors')


app.use(express.json())
app.use(cors());

app.use('/api', dashboardRoute)
app.use('/api', contactFormRoute)
app.use("/api", blogRoute)
app.use("/api", teamMemberRoute)
app.use('/api', projectRoute)
app.use('/api', clientRoute)
app.use('/api', loginRoute)





app.get('/', (req, res) => {
    res.send('Home page runing...')
})
app.listen(process.env.PORT, () => {
    console.log(`server is runing ${process.env.PORT}`)
})