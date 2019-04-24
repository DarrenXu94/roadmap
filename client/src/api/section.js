const axios = require('axios');
const HEROKU_URL = require('../config/config').HEROKU_URL
const data = require('./sectionData')

module.exports = {
    getSection: (name) => {
        // return axios.get(`${HEROKU_URL}/api/section/${name}`)
        return data.filter(el=>el.name === name)

    },
    postSection: (obj) => {
        return axios.post(`${HEROKU_URL}/api/section`, {
            name: obj.name,
            subSections: obj.subSections,
            order:obj.order
          })
          
    }
}