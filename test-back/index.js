const express = require('express');
const votesRouter = require('./routes/votes')
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())
app.get('/', (req, res) => res.send('Hello'))
app.use('/votes', votesRouter)

app.listen(port, () => console.log('App started'));