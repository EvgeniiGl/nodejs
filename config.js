const dotenv = require('dotenv');
dotenv.config()

const url = process.env.url || ''
const api_key = process.env.api_key || ''

module.exports = {
    url,
    api_key,
};
