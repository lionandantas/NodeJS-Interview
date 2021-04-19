import { Inject, Injectable } from '@nestjs/common';
import Customer from '../../infra/typeorm/entities/customer.entity';
import ICustomerRepository from '../../repositories/Icustomers.repository';

@Injectable()
export class FindByIdService {

  constructor(@Inject('ICustomerRepository') private readonly customerRepository: ICustomerRepository) { }

  public async execute(id: number): Promise<Customer> {

    const customer = await this.customerRepository.find(id);

    return customer;
  }
}
