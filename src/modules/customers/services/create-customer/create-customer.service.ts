import { Inject, Injectable } from '@nestjs/common';
import { BusinessException } from 'src/shared';
import CreateCustomerDto from '../../dtos/create-customer.dto';
import Customer from '../../infra/typeorm/entities/customer.entity';
import ICustomerRepository from '../../repositories/Icustomers.repository';

@Injectable()
export class CreateCustomerService {

  constructor(@Inject('ICustomerRepository') private readonly customerRepository: ICustomerRepository) { }

  public async execute(data: CreateCustomerDto): Promise<Customer> {

    const customerExist = await this.customerRepository.findByName(data.name);

    if (customerExist) {
      throw new BusinessException("Customer already exists");
    }

    const customer = await this.customerRepository.create(data);

    return customer;
  }
}
