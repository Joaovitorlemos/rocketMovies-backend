const express = require("express")
const app = express()

const migrationsRun = require("./database/sqlite/migrations")


migrationsRun()

const PORT = 3000

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))

app.get('/', function(require, response) {
   response.send('Hello')
})