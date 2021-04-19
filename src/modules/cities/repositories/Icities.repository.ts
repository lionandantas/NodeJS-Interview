import CreateCity from "../dtos/create-city.dto";
import City from "../infra/typeorm/entities/city.entity";

export default interface ICitiesRepository {
  findByState(state: string): Promise<City | undefined>;
  findByName(name: string): Promise<City | undefined>;
  create(data: CreateCity): Promise<City>;
  save(user: City): Promise<City>;
}
