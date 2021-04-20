import createCustomerDto from "../../dtos/create-customer.dto";
import Customer from "../../infra/typeorm/entities/customer.entity";
import ICustomerRepository from "../Icustomers.repository";
import { v4 as uuid_v4 } from "uuid";

class FakeCustomerRepository implements ICustomerRepository {
  private customers: Customer[] = [];

  public async find(id: number): Promise<Customer> {

    const findCustomer = this.customers.find(customer => customer.id === id);

    return findCustomer;
  }

  public async findByName(name: string): Promise<Customer> {
    try {
      const findCustomer = this.customers.find(customer => customer.name === name);

      return findCustomer;
    } catch (err) {
      return null;
    }
  }

  public async create(data: createCustomerDto): Promise<Customer> {
    const customer = new Customer();

    Object.assign(
      customer,
      {
        id: uuid_v4(),
      },
      data,
    );

    this.customers.push(customer);

    return customer;
  }

  public async save(customer: Customer): Promise<Customer> {

    const userIndex = this.customers.findIndex(
      findIndex => findIndex.id === customer.id,
    );

    this.customers[userIndex] = customer;

    return customer;
  }

  public async delete(id: number): Promise<boolean> {

    this.customers.forEach((item, index) => {
      if (item.id == id) {
        delete this.customers[index];
      }
    });
    return true;
  }


}

export default FakeCustomerRepository;
