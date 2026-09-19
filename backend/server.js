const express = require('express')
const dotenv = require("dotenv");
dotenv.config();
const contactFormRoute = require("./routes/contactFormRoute")
const blogRoute = require('./routes/blogRoute')

const mongoose = require('mongoose')
const app = express();
const himanshudB = require('./config/dbConfig')
const transporter = require('./config/nodemailerConfig')
const cors = require('cors')


app.use(express.json())
app.use(cors());

app.use('/api', contactFormRoute)
app.use("/api", blogRoute)






app.get('/', (req, res) => {
    res.send('Home page runing...')
})
app.listen(process.env.PORT, () => {
    console.log(`server is runing ${process.env.PORT}`)
})