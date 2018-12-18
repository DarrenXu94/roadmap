const axios = require('axios');

module.exports = {
    getSection: (name) => {
        return axios.get(`http://localhost:5000/api/section/${name}`)

    }
}