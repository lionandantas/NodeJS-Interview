import { InjectRepository } from "@nestjs/typeorm";
import ICreateCity from "src/modules/cities/dtos/create-city.dto";
import ICitiesRepository from "src/modules/cities/repositories/Icities.repository";
import { Like, Repository } from "typeorm";
import City from "../entities/city.entity";

class CitiesRepository implements ICitiesRepository {

  constructor(@InjectRepository(City) private readonly ormRepository: Repository<City>) { }

  public async findByState(state: string): Promise<City | undefined> {

    const city = await this.ormRepository.findOne({
      where: {
        state: state
      }
    });

    return city;
  }

  public async findByName(name: string): Promise<City | undefined> {
    const city = await this.ormRepository.findOne({
      where: {
        name: Like(`%${name}%`)
      }
    });

    return city;
  }

  public async create(data: ICreateCity): Promise<City> {
    const city = this.ormRepository.create(data);

    await this.ormRepository.save(city);

    return city;
  }

  save(city: City): Promise<City> {
    return this.ormRepository.save(city);
  }


}

export default CitiesRepository;
