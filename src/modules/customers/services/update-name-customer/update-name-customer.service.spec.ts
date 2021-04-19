import { Test, TestingModule } from '@nestjs/testing';
import { UpdateNameCustomerService } from './update-name-customer.service';

describe('UpdateNameCustomerService', () => {
  let service: UpdateNameCustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateNameCustomerService],
    }).compile();

    service = module.get<UpdateNameCustomerService>(UpdateNameCustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
