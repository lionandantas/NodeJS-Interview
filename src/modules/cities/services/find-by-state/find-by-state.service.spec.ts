import { Test, TestingModule } from '@nestjs/testing';
import { FindByStateService } from './find-by-state.service';

describe('FindByStateService', () => {
  let service: FindByStateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindByStateService],
    }).compile();

    service = module.get<FindByStateService>(FindByStateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
