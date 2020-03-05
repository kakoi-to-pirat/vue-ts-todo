import axios from 'axios';

const { VUE_APP_API_URL: baseURL } = process.env;

export default axios.create({ baseURL });
