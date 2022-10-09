const express = require('express')
const config = require('./config/index')
const router = require('./routes')

const app = express()

app.use(express.json())

app.use('/api/v1', router)



app.listen(config.port, () => {
    console.log(`${config.serverName} listening on port ${config.port}`);
})