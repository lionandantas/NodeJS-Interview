import FakeCitiesRepository from '../../repositories/fakes/fake-cities.respository';
import { FindByNameService } from './find-by-name.service';

describe('FindByNameService', () => {
  let service: FindByNameService;
  let fakeCitiesRepository: FakeCitiesRepository;

  beforeEach(async () => {
    fakeCitiesRepository = new FakeCitiesRepository();

    service = new FindByNameService(
      fakeCitiesRepository
    );
  });

  it("should be able to show the city", async () => {
    const city = await fakeCitiesRepository.create({
      name: "Vila Velha",
      state: "ES",
    });

    const profile = await service.execute({
      name: city.name
    });

    expect(profile.name).toBe("Vila Velha");
  });
});
