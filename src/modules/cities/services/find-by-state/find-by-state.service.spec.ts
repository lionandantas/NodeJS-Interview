import FakeCitiesRepository from '../../repositories/fakes/fake-cities.respository';
import { FindByStateService } from './find-by-state.service';

describe('FindByStateService', () => {
  let service: FindByStateService;
  let fakeCitiesRepository: FakeCitiesRepository;

  beforeEach(async () => {
    fakeCitiesRepository = new FakeCitiesRepository();

    service = new FindByStateService(
      fakeCitiesRepository
    );
  });


  it("should be able to show the city", async () => {
    const city = await fakeCitiesRepository.create({
      name: "Vila Velha",
      state: "ES",
    });

    const profile = await service.execute({
      state: city.state
    });

    expect(profile.name).toBe("Vila Velha");
  });

});


