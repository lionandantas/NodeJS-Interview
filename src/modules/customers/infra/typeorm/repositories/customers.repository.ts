import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import createCustomerDto from "src/modules/customers/dtos/create-customer.dto";
import ICustomerRepository from "src/modules/customers/repositories/Icustomers.repository";
import { Like, Repository } from "typeorm";
import Customer from "../entities/customer.entity";

@Injectable()
class CustomerRepository implements ICustomerRepository {

  constructor(@InjectRepository(Customer) private readonly ormRepository: Repository<Customer>) { }

  public async delete(id: number): Promise<boolean> {

    const result = await this.ormRepository.delete(id);

    return result.affected > 0;
  }

  public async find(id: number): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne({
      where: {
        id: id
      }
    });

    return customer;
  }
  public async findByName(name: string): Promise<Customer | undefined> {

    const customer = await this.ormRepository.findOne({
      where: {
        name: Like(`%${name}%`)
      }
    });

    return customer;
  }
  public async create(data: createCustomerDto): Promise<Customer> {
    const customer = this.ormRepository.create(data);

    await this.ormRepository.save(customer);

    return customer;
  }
  save(customer: Customer): Promise<Customer> {
    return this.ormRepository.save(customer);
  }


}

export default CustomerRepository;
