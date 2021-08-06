const express = require('express')
const cors = require('cors')
const { urlencoded } = require('express')
const app = express()
app.use(express.json(), urlencoded({ extended: true }), cors())
require('./server/config/mongoose.config')
const AllMyAuthorRoutes = require('./server/routes/Author.routes')
AllMyAuthorRoutes(app)
const port = 8000
app.listen(port, () => {
    console.log('Listening on Port 8000')
})