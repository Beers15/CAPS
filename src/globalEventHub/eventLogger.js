const hubEvents = require('./hubEvents.js');

hubEvents.on('pickup', (payload) => {
  console.log(getEventInfo('pickup', payload));
  
  hubEvents.emit('logged');
});

hubEvents.on('delivered', (payload) => {
  console.log(getEventInfo('delivered', payload));
});

hubEvents.on('in-transit', (payload) => {
  console.log(getEventInfo('in-transit', payload));
});

const getEventInfo = (eventName, payload) =>{
  let eventInfo = {};
  eventInfo.payload = payload;
  eventInfo.time = new Date();
  eventInfo.event = eventName;

  return eventInfo;
};

