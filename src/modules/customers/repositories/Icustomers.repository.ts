import CreateCustomerDto from "../dtos/create-customer.dto";
import Customer from "../infra/typeorm/entities/customer.entity";

export default interface ICustomerRepository {
  find(id: number): Promise<Customer | undefined>;
  findByName(name: string): Promise<Customer | undefined>;
  create(data: CreateCustomerDto): Promise<Customer>;
  save(customer: Customer): Promise<Customer>;
  delete(id: number): Promise<boolean>;
}
