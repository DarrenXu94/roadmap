const axios = require('axios');

module.exports = {
    getSection: (name) => {
        return axios.get(`http://localhost:5000/api/section/${name}`)

    },
    postSection: (obj) => {
        return axios.post('http://localhost:5000/api/section', {
            name: obj.name,
            subSections: obj.subSections
          })
          
    }
}