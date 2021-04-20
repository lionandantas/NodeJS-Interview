import FakeCitiesRepository from '../../repositories/fakes/fake-cities.respository';
import { CreateCityService } from './create-city.service';

describe('CreateCityService', () => {

  let fakeCitiesRepository: FakeCitiesRepository;
  let service: CreateCityService;
  beforeEach(async () => {
    fakeCitiesRepository = new FakeCitiesRepository();

    service = new CreateCityService(
      fakeCitiesRepository
    );
  });

  it("should be able to create a new city", async () => {
    const city = await service.execute({
      name: "Vila Velha",
      state: "ES",
    });
    expect(city).toHaveProperty("id");
  });

  it("should not be able to create two city with the same name", async () => {
    await service.execute({
      name: "Vila Velha",
      state: "ES",
    });

    await expect(
      service.execute({
        name: "Vila Velha",
        state: "ES",
      }),
    ).rejects.toBeInstanceOf(Error);
  });

});
