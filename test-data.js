const { v4: uuidv4 } = require('uuid');
const faker = require('faker');

let data;

const createData = () => {
  //for(let i = 0; i < 10; i++) {
  let entry = {
    //store: 'The ' + faker.commerce.productAdjective() + faker.commerce.product() + ' store',
    orderID: uuidv4(),
    name: faker.name.findName(),
    address: faker.address.streetAddress(),
  //};
  //data.push(entry);
  };

  data = entry;
};

createData();

module.exports = data;