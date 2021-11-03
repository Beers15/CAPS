'use strict';

const socketio = require('socket.io');
const PORT = process.env.PORT || 3000;
const server = socketio(PORT); 
require('dotenv').config();



const logEvent = require('./logEvent.js');

const caps = server.of('/caps');

caps.on('connection', (socket) => {
  socket.on('pickup', (payload) => logEvent('pickup', payload));
  socket.on('in-transit', (payload) => logEvent('in-transit', payload));
  socket.on('delivered', (payload) => logEvent('delivered', payload));

  socket.on('pickup', (payload) => {
    caps.emit('pickup', payload);
  });

  socket.on('join', (payload) => {
    //Using store as vendor id 
    socket.join(payload.store);
  });

  socket.on('in-transit', (payload) => {
    caps.to(payload.store).emit('in-transit');
  });

  socket.on('delivered', (payload) => {
    caps.to(payload.store).emit('delivered', payload);
  });
});

module.exports = caps;
