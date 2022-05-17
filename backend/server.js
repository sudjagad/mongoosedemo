const express= require('express')
const dotenv= require('dotenv').config
const colors= require('colors')
const connectDB= require('./config/db')
const port= 5000
var invoiceRouter = require('./routes/invoice');
const {errorHandler}= require('./middleware/errorMiddleware')

connectDB()

const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(errorHandler)

app.use('/api/invoice', invoiceRouter)
app.listen(port, () => console.log(`Server started on port ${port}`))