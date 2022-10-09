const express = require('express')
const config = require('./config/index')
const router = require('./routes')

const app = express()

app.use(express.json())

app.use('/api/v1', router)



app.listen(config.partnerServerPort, () => {
    console.log(`${config.partnerSeverName} listening on port ${config.partnerServerPort}`);
})