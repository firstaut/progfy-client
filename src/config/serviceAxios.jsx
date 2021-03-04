import Axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const {
    API_ENDPOINT_LOCAL,
    API_ENDPOINT_HEROKU,
    API_ENDPOINT_PROGFY,
} = publicRuntimeConfig;

console.log(API_ENDPOINT_HEROKU);

const serviceAxios = Axios.create({
    baseURL: API_ENDPOINT_LOCAL
});

export default serviceAxios;