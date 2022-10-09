const config = require('../config')
const tokenServices = require('../service/token')
const axios = require('axios')

const produce = async (req, res) => {
    const tokenPlayload = {
        tokenOrigin: `This token was created by ${config.serverName}`,
    }
    const token = tokenServices.buildToken(config.serverName, tokenPlayload)

    const reqConfig = {
        headers: {
            Authorization: `Bearer: ${token}`
        }
    }

    try {
        const partnerServerHostAndPort = `${config.partnerServerHost}:${config.partnerServerPort}`
        console.log(`[${config.serverName}] sending request to consumer: ${partnerServerHostAndPort}`);
        const payload = {
            origin: `this message is in the body of the HTTP request and comes from ${config.serverName} `
        }
        const url = `http://${partnerServerHostAndPort}/api/v1`
        await axios.post(url, payload, reqConfig)
    } catch(err) {
        console.error(`[${config.serverName}] ${err} `)
        res.status(500).json('something went wrong')
    }
    console.error(`[${config.serverName}] data exchange successfully finished `)
    res.status(204)
}

module.exports = { produce }