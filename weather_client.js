const axios = require('axios');
const {url, api_key} = require('./config')

const cityName = process.argv.slice(2)[0];

if (!cityName) {
    console.log('Название города обязательно!');
    return;
}

const params = {
    access_key: api_key,
    query: cityName
}

axios.get(url + '/current', {params})
    .then(response => {
        const apiResponse = response.data;
        if (apiResponse.success === false) {
            console.error(apiResponse.error);
            return;
        }
        console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}С`);
    }).catch(error => {
    console.log(error);
});
