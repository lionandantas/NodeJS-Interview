import { Inject, Injectable } from '@nestjs/common';
import City from '../../infra/typeorm/entities/city.entity';
import ICitiesRepository from '../../repositories/Icities.repository';


interface IRequest {
  name: string;
}

@Injectable()
export class FindByNameService {
  constructor(@Inject('ICitiesRepository') private readonly citiesRepository: ICitiesRepository) { }

  public async execute({ name }: IRequest): Promise<City> {
    const city = await this.citiesRepository.findByName(name);


    return city;
  }
}
