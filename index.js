'use strict';

require('./src/globalEventHub/eventLogger');

if(!process.argv[2]) {
  console.log('You need to provide a "store name"');
} else {
  require('./src/clients/vendorClient');
}
