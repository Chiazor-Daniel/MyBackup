// placeOrder.js
const { apiRequest } = require('./bybitApi');

const placeOrder = async () => {
    const endpoint = '/v2/private/order/create';
    const params = {
        symbol: 'BTCUSD',
        side: 'Buy', // or 'Sell'
        order_type: 'Market', // or 'Limit'
        qty: 1, // Quantity of the asset
        time_in_force: 'GoodTillCancel', // or 'ImmediateOrCancel'
        price: 0, // Only needed for 'Limit' orders
    };

    try {
        const response = await apiRequest(endpoint, params, 'POST');
        console.log('Order Response:', response);
    } catch (error) {
        console.error('Error placing order:', error);
    }
};

placeOrder();
