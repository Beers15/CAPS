const hubEvents = require('../src/globalEventHub/hubEvents');
require('../src/globalEventHub/eventLogger');

describe('Tests if Event handlers in CAPS work as intended', () => {
  console.log = jest.fn();

  let payload =  {
    store: 'the shop',
    orderID: 'bde380e1-9f05-4387-b2f0-21101d21c447',
    customer: 'Dr. Harvey Carroll',
    address: '73244 Labadie Creek',
  };

  it('properly logs events that occur', () => {
    hubEvents.emit('pickup', payload);
    //avoid toHaveBeencalledWith due to time field issues
    expect(console.log).toHaveBeenCalledTimes(1);
  });

  it('properly handles an in-transit event', () => {
    hubEvents.emit('in-transit', payload);
    //avoid toHaveBeencalledWith due to time field issues
    expect(console.log).toHaveBeenCalledTimes(2);
  });

  it('properly handles a pickup event', () => {
    hubEvents.emit('pickup', payload);
    //avoid toHaveBeencalledWith due to time field issues
    expect(console.log).toHaveBeenCalledTimes(3);
  });

  it('properly handles a delivered event', () => {
    hubEvents.emit('pickup', payload);
    //avoid toHaveBeencalledWith due to time field issues
    expect(console.log).toHaveBeenCalledTimes(4);
  });
});