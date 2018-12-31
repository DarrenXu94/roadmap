const axios = require('axios');

const HEROKU_URL = require('../config/config').HEROKU_URL

module.exports = () => { 
    return axios.get(`${HEROKU_URL}/api/mainLayout`)

};