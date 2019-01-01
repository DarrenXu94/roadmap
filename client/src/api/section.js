const axios = require('axios');
const HEROKU_URL = require('../config/config').HEROKU_URL

module.exports = {
    getSection: (name) => {
        return axios.get(`${HEROKU_URL}/api/section/${name}`)

    },
    postSection: (obj) => {
        return axios.post(`${HEROKU_URL}/api/section`, {
            name: obj.name,
            subSections: obj.subSections,
            order:obj.order
          })
          
    }
}