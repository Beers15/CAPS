const client = require('socket.io-client');
require('dotenv').config();

const capsClient = client(`${process.env.ROOT_URL}caps`); 

capsClient.on('pickup', async (payload) => {
  console.log(`DRIVER: picked up ${payload.orderID}`);

  await capsClient.emit('in-transit', payload);

  console.log(`Driver delivered ${payload.orderID}`);

  capsClient.emit('delivered', payload);
});

capsClient.on('delivered', (payload) => console.log('Thank you 2'));

