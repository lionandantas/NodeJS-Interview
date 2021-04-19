import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Customer from 'src/modules/customers/customer.entity';
import { BaseService } from 'src/shared/base/base.service';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService extends BaseService<Customer> {

  constructor(
    @InjectRepository(Customer)
    private readonly usersRepository: Repository<Customer>) {
    super(usersRepository);
  }



  public async findByName(name: string): Promise<Customer | undefined> {

    const customer = await this.usersRepository.findOne({
      where: {
        name: name
      }
    });

    return customer;
  }
}



