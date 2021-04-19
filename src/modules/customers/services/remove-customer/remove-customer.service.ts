import { Inject, Injectable } from '@nestjs/common';
import ICustomerRepository from '../../repositories/Icustomers.repository';

@Injectable()
export class RemoveCustomerService {
  constructor(@Inject('ICustomerRepository') private readonly customerRepository: ICustomerRepository) { }

  public async execute(id: number): Promise<boolean> {

    return await this.customerRepository.delete(id);

  }
}
