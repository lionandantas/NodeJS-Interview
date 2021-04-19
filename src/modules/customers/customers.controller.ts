import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import Customer from 'src/modules/customers/customer.entity';
import { BaseController } from 'src/shared/base/base.controller';
import { CustomersService } from './customers.service';

@ApiTags('customers')
@Controller('customers')
export class CustomersController extends BaseController<Customer>{

  constructor(private readonly customersService: CustomersService) {
    super(customersService)
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Entity retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Entity does not exist' })
  async findById(@Param('id') id: number): Promise<Customer> {
    return this.customersService.get(1);
  }
}

