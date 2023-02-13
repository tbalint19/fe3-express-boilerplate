const express = require('express')
const app = express()
const cors = require("cors")
const loggerMiddleware = require("./middlewares/logger")
const userRoutes = require("./routes/user")
const todoRoutes = require("./routes/todo")
const errorHandlerMiddleware = require("./middlewares/errorHandler")

app.use(cors())
app.use(express.json())
app.use(loggerMiddleware())

app.use("/api/user", userRoutes)
app.use("/api/todo", todoRoutes)

app.use(errorHandlerMiddleware)

const port = 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})