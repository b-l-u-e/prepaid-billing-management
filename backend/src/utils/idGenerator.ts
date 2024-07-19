import Customer from '../models/Customer';
import Meter from '../models/Meter';
import Payment from '../models/Payment';
import Reading from '../models/Reading';

export const generateRandomId = async (prefix: string, model: any): Promise<string> => {
  let id = '';
  let isUnique = false;

  while (!isUnique) {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    id = `${prefix}${randomNumber.toString().padStart(4, '0')}`;
    isUnique = await checkUniqueId(id, model);
  }

  return id;
};

const checkUniqueId = async (id: string, model: any): Promise<boolean> => {
  const exists = await model.exists({ customerId: id });
  return !exists;
};
