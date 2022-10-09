require('dotenv').config()
const fs = require('fs')

const loadKey = (path) => {
    if (!path) return null
    try {   
        fs.readFileSync(path)
    } catch(err) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = {
    partnerServerHost: 'localhost',
    partnerServerPort: process.env.PARTNER_SERVER_PORT,
    partnerRSAPublicKey: loadKey(process.env.PARTNER_JWT_RSA_PUBLIC_KEY),

    hostname: 'localhost',
    port: process.env.PORT,
    serverName: process.env.SERVER_NAME,
    rsaPrivateKey: loadKey(process.env.JWT_RSA_PRIVATE_KEY),

    // in production use more complicated secret
    hmacsecret: process.env.SECRET
}