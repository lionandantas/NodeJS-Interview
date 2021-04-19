import { Test, TestingModule } from '@nestjs/testing';
import { RemoveCustomerService } from './remove-customer.service';

describe('RemoveCustomerService', () => {
  let service: RemoveCustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveCustomerService],
    }).compile();

    service = module.get<RemoveCustomerService>(RemoveCustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
