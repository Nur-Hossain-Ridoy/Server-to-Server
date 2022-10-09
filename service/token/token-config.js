const config = require('../../config')

const defaultSignOptions = {
    expiresIn: 15 * 60, //expires in 15min
    issuer: config.serverName,
    audience: `${config.partnerServerHost}: ${config.partnerServerPort}`

}

const hmacSignOptions = {
    ...defaultSignOptions,
    algorithm: "HS256"
}

const hmacVerifyOptions = {
    algorithms: ['HS256'] // only allow HMAC with SHA256
}

const rsaVerifyOptions = {
    // only allow RSA + SHA256
    algorithms: ["RS256"]
}

const rsaSignOptions = {
    algorithm: "RS256",
    ...defaultSignOptions    
}

const getSingingConfig = (subject) => {
    if (config.rsaPrivateKey) {
        return {
            options: {...rsaSignOptions, subject},
            secret: config.rsaPrivateKey
        }
    }
    return {
        options: {...hmacSignOptions, subject},
        secret: config.hmacsecret
    }
}


const getVerifyConfig = () => {
    if (config.rsaPrivateKey) {
        return {
            options: rsaVerifyOptions,
            secret: config.partnerRSAPublicKey
        }
    }
    return {
        options: hmacVerifyOptions,
        secret: config.hmacsecret
    }
}

module.exports = {
    getSingingConfig,
    getVerifyConfig
}