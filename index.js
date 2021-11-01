'use strict';

const hubEvents = require('./src/globalEventHub/hubEvents');
require('./src/globalEventHub/eventLogger');

const data = require('./test-data');
const input = process.argv[2];

if(!input) {
  console.log('You need to provide a "store name"');
} else {
  hubEvents.emit('payload', {
    store: input,
    orderID: data.orderID,
    customer: data.name,
    address: data.address,
  });
}
