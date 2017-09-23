// create new file ./config/env/development.js (2)
// and ./config/env/production.js (3)
module.exports = {
    // mongoUri: 'mongodb://localhost/dbapp',
    // or use 
    mongoUri: 'mongodb://admin:1234@localhost:27017/dbapp',
    debug: true,
    sessionSecret: 'dev_secret_key'
}
