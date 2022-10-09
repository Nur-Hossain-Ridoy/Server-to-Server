const jwt = require('jsonwebtoken')
const tokenConfig = require('./token-config')


function buildToken(subject, payload = {}) { 
    const {options, secret} = tokenConfig.getSingingConfig(subject)
    return jwt.sign(payload, secret, options)
}

function verifyToken(token) {
    const {options, secret} = tokenConfig.getVerifyConfig()
    try {
        return jwt.verify(token, secret, options)
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    buildToken,
    verifyToken
}