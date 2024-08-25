// cancelOrder.js
const { apiRequest } = require('./bybitApi');

const cancelOrder = async () => {
    const endpoint = '/v2/private/order/cancel';
    const params = {
        symbol: 'BTCUSD',
        order_id: 'your_order_id', // Replace with the ID of the order you want to cancel
    };

    try {
        const response = await apiRequest(endpoint, params, 'POST');
        console.log('Cancel Order Response:', response);
    } catch (error) {
        console.error('Error canceling order:', error);
    }
};

cancelOrder();
