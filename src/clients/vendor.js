'use strict';

const client = require('socket.io-client');
const { v4: uuidv4 } = require('uuid');
const faker = require('faker');
require('dotenv').config();

const data = {
  store: process.argv[2] || 'Supermart123',
  orderID: uuidv4(),
  customer: faker.name.findName(),
  address: faker.address.streetAddress(),
};

const capsClient = client(`${process.env.ROOT_URL}caps`); 

capsClient.emit('join', data);

capsClient.emit('pickup', data);

capsClient.on('delivered', (payload) => console.log('Thank you ' + payload.orderID));
