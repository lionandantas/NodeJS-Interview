import { Inject, Injectable } from '@nestjs/common';
import UpdateNameCustomerDto from '../../dtos/update-name-customer.dto';
import Customer from '../../infra/typeorm/entities/customer.entity';
import ICustomerRepository from '../../repositories/Icustomers.repository';

@Injectable()
export class UpdateNameCustomerService {
  constructor(@Inject('ICustomerRepository') private readonly customerRepository: ICustomerRepository) { }

  public async execute(id: number, { name }: UpdateNameCustomerDto): Promise<Customer> {
    const customer = await this.customerRepository.find(id);
    if (customer == null)
      throw new Error("customer not found");

    customer.name = name;

    await this.customerRepository.save(customer);

    return customer;
  }
}
