import { conn } from "../../databases/DatabasesConnection";

const getAllCustomers = async () => {
  const data = await conn.query('select *from customers');
  return data[0];
}

const getCustomer = async (parent: any, args: any) => {
  const data = await conn.query('select * from customers where id = ?', args.id)
  return data[0].map((data: any) => data)[0]
}

const insertCustomer = async (p: any, args: any) => {
  if (args.data.company == undefined || args.data.company == "") {
    return false;
  }
  if (args.data.first_name == undefined || args.data.first_name == "") {
    return false;
  }
  if (args.data.last_name == undefined || args.data.last_name == "") {
    return false;
  }
  if (args.data.job_title == undefined || args.data.job_title == "") {
    return false;
  }
  
  try {
    await conn.query(`
      INSERT INTO customers(company, first_name, last_name, job_title) VALUES(
        '${args.data.company}', 
        '${args.data.first_name}', 
        '${args.data.last_name}',
        '${args.data.job_title}'
      )
    `);
    return true;
  } catch (error) {
    return false;
  }
}

const updateCustomer = async (p: any, args: any) => {
  if (args.data.company == undefined || args.data.company == "") {
    return false;
  }
  if (args.data.first_name == undefined || args.data.first_name == "") {
    return false;
  }
  if (args.data.last_name == undefined || args.data.last_name == "") {
    return false;
  }
  if (args.data.job_title == undefined || args.data.job_title == "") {
    return false;
  }
  try {
    await conn.query(`
      UPDATE customers SET 
       company = '${args.data.company}',
       first_name = '${args.data.first_name}',
       last_name = '${args.data.last_name}',
       job_title = '${args.data.job_title}'
      WHERE id = '${args.data.id}'`)
    return true;
  } catch (error) {
    return error;
  }
}

const removeCustomer = async (p: any, args: any) => {
  try {
    await conn.query(`DELETE FROM customers WHERE id = '${args.data.id}'`)
    return true;
  } catch (error) {
    return error;
  }
}

export const CustomerResolvers = {

  Query: {
    customers: getAllCustomers,
    customer: getCustomer
  },

  Mutation: {
    addCustomer: insertCustomer,
    editCustomer: updateCustomer,
    deleteCustomer: removeCustomer
  }

}