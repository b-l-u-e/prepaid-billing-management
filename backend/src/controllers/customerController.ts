import { Request, Response } from 'express';
import Customer from '../models/Customer';

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err :any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const getCustomerById = async (req: Request, res: Response) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ msg: 'Customer not found' });
    }
    res.json(customer);
  } catch (err :any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const createCustomer = async (req: Request, res: Response) => {
  const { customerId, name, address, email, phoneNumber } = req.body;
  try {
    const newCustomer = new Customer({ customerId, name, address, email, phoneNumber });
    const customer = await newCustomer.save();
    res.json(customer);
  } catch (err :any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const updateCustomer = async (req: Request, res: Response) => {
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
  } catch (err :any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const deleteCustomer = async (req: Request, res: Response) => {
    try {
      const customer = await Customer.findByIdAndDelete(req.params.id);
      if (!customer) {
        return res.status(404).json({ msg: 'Customer not found' });
      }
      res.json({ msg: 'Customer removed' });
    } catch (err :any) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
