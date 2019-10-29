import axios from 'axios';
import {clientId, baseApi} from "../config/const";

export default axios.create({
    baseURL: baseApi,
    headers: {
        'Authorization': `Client-ID ${clientId}`
    }
});