const Customer = require('../models/Customer');

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ msg: 'Customer not found' });
    }
    res.json(customer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.createCustomer = async (req, res) => {
  const { customerId, name, address, email, phoneNumber } = req.body;
  try {
    const newCustomer = new Customer({ customerId, name, address, email, phoneNumber });
    const customer = await newCustomer.save();
    res.json(customer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateCustomer = async (req, res) => {
  const { customerId, name, address, email, phoneNumber } = req.body;
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ msg: 'Customer not found' });
    }
    customer.customerId = customerId;
    customer.name = name;
    customer.address = address;
    customer.email = email;
    customer.phoneNumber = phoneNumber;

    await customer.save();
    res.json(customer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res.status(404).json({ msg: 'Customer not found' });
    }
    res.json({ msg: 'Customer removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};