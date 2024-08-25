// getOpenOrders.js
const { apiRequest } = require('./bybitApi');

const getOpenOrders = async () => {
    const endpoint = '/v2/private/order';
    const params = {
        symbol: 'BTCUSD',
        order_status: 'New', // To get open orders
    };

    try {
        const response = await apiRequest(endpoint, params, 'GET');
        console.log('Open Orders:', response);
    } catch (error) {
        console.error('Error fetching open orders:', error);
    }
};

getOpenOrders();
