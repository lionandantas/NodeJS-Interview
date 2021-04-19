import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import Customer from '../../typeorm/entities/customer.entity';
import CreateCustomerDto from 'src/modules/customers/dtos/create-customer.dto';
import { CreateCustomerService } from 'src/modules/customers/services/create-customer/create-customer.service';
import { FindByIdService } from 'src/modules/customers/services/find-by-id/find-by-id.service';
import { FindByNameService } from 'src/modules/customers/services/find-by-name/find-by-name.service';
import { RemoveCustomerService } from 'src/modules/customers/services/remove-customer/remove-customer.service';
import { UpdateNameCustomerService } from 'src/modules/customers/services/update-name-customer/update-name-customer.service';
import UpdateNameCustomerDto from 'src/modules/customers/dtos/update-name-customer.dto';
import { classToClass } from 'class-transformer';
import { CustomerDto } from 'src/modules/customers/dtos/customer.dto';


@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(
    private readonly findByNameService: FindByNameService,
    private readonly findByIdService: FindByIdService,
    private readonly createCustomerService: CreateCustomerService,
    private readonly removeCustomerService: RemoveCustomerService,
    private readonly updateNameCustomerService: UpdateNameCustomerService
  ) { }

  @Get('findByName')
  @ApiOperation({
    summary: 'Find customers by name',
  })
  @ApiQuery({
    name: 'name',
    type: String,
    description: 'The customers name',
  })
  @ApiOkResponse({ description: 'Customer founded.', type: CustomerDto })
  @ApiNotFoundResponse({
    description: 'returns the customer by the name searched.',
    type: String,
  })
  async findByName(@Query('name') name: string): Promise<CustomerDto> {

    const customer = await this.findByNameService.execute({ name: name });

    return CustomerDto.toDto(customer);
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Customer founded.', type: CustomerDto })
  async findById(@Param('id') id: number): Promise<CustomerDto> {
    const customer = await this.findByIdService.execute(id);

    return CustomerDto.toDto(customer);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new customer',
  })
  @ApiCreatedResponse({ description: 'Customer created.', type: CustomerDto })
  async create(
    @Body() request: CreateCustomerDto,
  ): Promise<CustomerDto> {
    const customer = await this.createCustomerService.execute(request);
    return CustomerDto.toDto(customer);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remove customer',
  })
  async delete(@Param('id') id: number) {
    return this.removeCustomerService.execute(id);
  }

  @ApiOperation({ summary: 'Update name customer' })
  @Put(':id')
  async update(@Param('id') id: number, @Body() request: UpdateNameCustomerDto): Promise<CustomerDto> {

    const customer = await this.updateNameCustomerService.execute(id, request);
    return CustomerDto.toDto(customer);
  }
}

