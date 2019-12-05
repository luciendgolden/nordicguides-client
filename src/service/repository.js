import axios from 'axios';

const baseDomain = 'http://nordicguides-server.test';
const baseURL = `${baseDomain}/api`;

export default axios.create({ baseURL });
