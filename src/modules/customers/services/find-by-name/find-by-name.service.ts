import { Inject, Injectable } from '@nestjs/common';
import Customer from '../../infra/typeorm/entities/customer.entity';
import ICustomerRepository from '../../repositories/Icustomers.repository';

interface IRequest {
  name: string;
}

@Injectable()
export class FindByNameService {
  constructor(@Inject('ICustomerRepository') private readonly customerRepository: ICustomerRepository) { }

  public async execute({ name }: IRequest): Promise<Customer> {

    const customer = await this.customerRepository.findByName(name);

    return customer;
  }
}

