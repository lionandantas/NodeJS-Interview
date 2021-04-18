import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import Customer from 'src/modules/customers/customer.entity';
import { BaseController } from 'src/shared/base/base.controller';
import { CustomersService } from './customers.service';

@ApiTags('customers')
@Controller('customers')
export class CustomersController extends BaseController<Customer>{

    constructor(private readonly customersService: CustomersService) {
        super(customersService)
    }
}

