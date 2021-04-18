import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import City from 'src/modules/cities/city.entity';
import Customer from 'src/modules/customers/customer.entity';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';


@Module({
  providers: [CustomersService],
  controllers: [CustomersController],
  exports: [CustomersService],
  imports: [TypeOrmModule.forFeature([Customer, City])],
})
export class CustomersModule { }
