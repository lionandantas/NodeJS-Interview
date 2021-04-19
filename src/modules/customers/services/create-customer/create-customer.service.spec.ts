import { Test, TestingModule } from '@nestjs/testing';
import { CreateCustomerService } from './create-customer.service';

describe('CreateCustomerService', () => {
  let service: CreateCustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateCustomerService],
    }).compile();

    service = module.get<CreateCustomerService>(CreateCustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
