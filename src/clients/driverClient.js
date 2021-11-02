const hubEvents = require('../globalEventHub/hubEvents.js');
require('./vendorClient');

hubEvents.on('pickup', async (payload) => {
  console.log(`DRIVER: picked up ${payload.orderID}`);

  await hubEvents.emit('in-transit', payload);

  console.log(`Driver delivered ${payload.orderID}`);

  hubEvents.emit('delivered', payload);
});
