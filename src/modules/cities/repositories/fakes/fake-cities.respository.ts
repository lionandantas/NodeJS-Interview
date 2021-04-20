import createCityDto from "../../dtos/create-city.dto";
import City from "../../infra/typeorm/entities/city.entity";
import ICitiesRepository from "../Icities.repository";
import { v4 as uuid_v4 } from "uuid";

class FakeCitiesRepository implements ICitiesRepository {
  private cities: City[] = [];

  public async findByState(state: string): Promise<City> {
    const findCity = this.cities.find(city => city.state === state);

    return findCity;
  }

  public async findByName(name: string): Promise<City> {
    const findCity = this.cities.find(city => city.name === name);

    return findCity;
  }

  public async create(data: createCityDto): Promise<City> {
    const city = new City();

    Object.assign(
      city,
      {
        id: uuid_v4(),
      },
      data,
    );

    this.cities.push(city);

    return city;
  }

  public async save(city: City): Promise<City> {

    const userIndex = this.cities.findIndex(
      findIndex => findIndex.id === city.id,
    );

    this.cities[userIndex] = city;

    return city;
  }


}
export default FakeCitiesRepository;
