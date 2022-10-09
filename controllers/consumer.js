const config = require('../config')

const consume = (req, res) => {
    console.log(`[${config.serverName}] received ${JSON.stringify(req.body, null, 2 )}`);
    console.log(`[${config.serverName}] received ${JSON.stringify(req.token, null, 2 )}`);
    res.status(204)
}

module.exports = { consume }