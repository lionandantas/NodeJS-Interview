import { Test, TestingModule } from '@nestjs/testing';
import { FindByNameService } from './find-by-name.service';

describe('FindByNameService', () => {
  let service: FindByNameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindByNameService],
    }).compile();

    service = module.get<FindByNameService>(FindByNameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
