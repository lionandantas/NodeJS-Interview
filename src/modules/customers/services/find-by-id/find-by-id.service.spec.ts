import { Test, TestingModule } from '@nestjs/testing';
import { FindByIdService } from './find-by-id.service';

describe('FindByIdService', () => {
  let service: FindByIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindByIdService],
    }).compile();

    service = module.get<FindByIdService>(FindByIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
