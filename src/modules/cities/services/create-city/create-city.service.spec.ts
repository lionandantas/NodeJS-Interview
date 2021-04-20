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
    const user = await service.execute({
      name: "Vila Velha",
      state: "ES",
    });
    expect(user).toHaveProperty("id");
  });

  it("should not be able to create two users with the same email", async () => {
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
