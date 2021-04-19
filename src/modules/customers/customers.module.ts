import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Customer from 'src/modules/customers/infra/typeorm/entities/customer.entity';
import City from '../cities/infra/typeorm/entities/city.entity';
import { CustomersController } from './infra/http/controllers/customers.controller';
import CustomerRepository from './infra/typeorm/repositories/customers.repository';
import { CreateCustomerService } from './services/create-customer/create-customer.service';
import { FindByIdService } from './services/find-by-id/find-by-id.service';
import { FindByNameService } from './services/find-by-name/find-by-name.service';
import { RemoveCustomerService } from './services/remove-customer/remove-customer.service';
import { UpdateNameCustomerService } from './services/update-name-customer/update-name-customer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, City])],
  providers: [
    {
      provide: 'ICustomerRepository',
      useClass: CustomerRepository
    },
    CreateCustomerService,
    FindByNameService,
    FindByIdService,
    RemoveCustomerService,
    UpdateNameCustomerService
  ],
  exports: [],
  controllers: [CustomersController]

})
export class CustomersModule { }
