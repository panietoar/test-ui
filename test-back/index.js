const express = require('express');
const bodyParser = require('body-parser')
const votesRouter = require('./routes/votes')
const usersRouter = require('./routes/users')
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.json())

app.use('/votes', votesRouter)
app.use('/users', usersRouter)

app.listen(port, () => console.log('App started'));