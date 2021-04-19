import { Test, TestingModule } from '@nestjs/testing';
import { CreateCityService } from './create-city.service';

describe('CreateCityService', () => {
  let service: CreateCityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateCityService],
    }).compile();

    service = module.get<CreateCityService>(CreateCityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
