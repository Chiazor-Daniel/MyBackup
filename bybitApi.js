// bybitApi.js
require('dotenv').config();
const axios = require('axios');
const crypto = require('crypto');

const API_KEY = process.env.BYBIT_API_KEY;
const API_SECRET = process.env.BYBIT_API_SECRET;
const BASE_URL = 'https://api.bybit.com'; // Use testnet URL if you are on the testnet

// Function to generate signature
const generateSignature = (params) => {
    const queryString = new URLSearchParams(params).toString();
    return crypto.createHmac('sha256', API_SECRET).update(queryString).digest('hex');
};

// Function to make API requests
const apiRequest = async (endpoint, params = {}, method = 'GET') => {
    const timestamp = Date.now();
    params.api_key = API_KEY;
    params.timestamp = timestamp;
    params.sign = generateSignature(params);

    try {
        const response = await axios({
            method,
            url: `${BASE_URL}${endpoint}`,
            params: params,
        });
        return response.data;
    } catch (error) {
        console.error('API Request Error:', error.response ? error.response.data : error.message);
        throw error;
    }
};

module.exports = { apiRequest };
