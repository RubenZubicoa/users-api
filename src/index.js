const express = require('express')

const app = express();

const morgan = require('morgan')
const cors = require('cors')

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())


const usersController = require('./routes/user.router')

app.use('/users',  usersController)

app.listen(3000, () => console.log('Server on port 3000'))
