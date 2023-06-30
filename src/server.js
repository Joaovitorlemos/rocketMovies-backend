const express = require("express")
const app = express()
const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError")


migrationsRun()





const PORT = 3000

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))