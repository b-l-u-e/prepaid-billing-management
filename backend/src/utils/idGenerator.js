const Customer = require('../models/Customer');
const Meter = require('../models/Meter');
const Payment = require('../models/Payment');
const Reading = require('../models/Reading');

const generateRandomId = async (prefix, model) => {
  let id = '';
  let isUnique = false;

  while (!isUnique) {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    id = `${prefix}${randomNumber.toString().padStart(4, '0')}`;
    isUnique = await checkUniqueId(id, model);
  }

  return id;
};

const checkUniqueId = async (id, model) => {
  const exists = await model.exists({ customerId: id });
  return !exists;
};

module.exports = { generateRandomId };