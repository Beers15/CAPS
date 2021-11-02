const hubEvents = require('../globalEventHub/hubEvents.js');
const data = require('../../test-data');
require('./driverClient');

hubEvents.emit('pickup', {
  store: process.argv[2],
  orderID: data.orderID,
  customer: data.name,
  address: data.address,
});

hubEvents.on('delivered', (payload) => console.log('Thank you ' + payload.customer));