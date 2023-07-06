const dotenv = require('dotenv').config()
const express = require('express')
const Task = require('./models/taskModel')
const mongoose = require('mongoose')
const taskRoutes = require('./routes/taskRoute')
const cors = require('cors')


mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`the server is running on port ${PORT}`)
    })

})



const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use("/api/tasks",taskRoutes)




const PORT = process.env.PORT || '8000'

