// create new file ./config/env/development.js (2)
// and ./config/env/production.js (3)
module.exports = {
    // mongoUri: 'mongodb://localhost/dbapp',
    // or use 
    mongoUri: 'mongodb://admin:1234@localhost:27017/dbapp',
    debug: true,
    sessionSecret: 'dev_secret_key',
    google: {
        clientID: '1043709044211-pf9che3l695128j6e3ne2c09ukshh73g.apps.googleusercontent.com',
        clientSecret: 'ReclkyQcQdOBo4Z8Pq_lzvki',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
 }

}
