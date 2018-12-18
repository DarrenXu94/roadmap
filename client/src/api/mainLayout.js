const axios = require('axios');

module.exports = () => { 
    return axios.get('http://localhost:5000/api/mainLayout')

};