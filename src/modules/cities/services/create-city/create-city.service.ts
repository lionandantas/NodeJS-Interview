import { Inject, Injectable } from '@nestjs/common';
import { BusinessException } from 'src/shared/http/exception/business-execption';
import City from '../../infra/typeorm/entities/city.entity';
import ICitiesRepository from '../../repositories/Icities.repository';

interface IRequest {
  state: string;
  name: string;
}

@Injectable()
export class CreateCityService {

  constructor(@Inject('ICitiesRepository') private readonly citiesRepository: ICitiesRepository) { }

  public async execute({ name, state }: IRequest): Promise<City> {

    const cityExist = await this.citiesRepository.findByName(name);

    if (cityExist) {
      throw new BusinessException("City already exists");
    }


    const city = await this.citiesRepository.create({
      name,
      state
    });

    return city;
  }
}
