import { Inject, Injectable } from '@nestjs/common';
import City from '../../infra/typeorm/entities/city.entity';
import ICitiesRepository from '../../repositories/Icities.repository';

interface IRequest {
  state: string;
}


@Injectable()
export class FindByStateService {

  constructor(@Inject('ICitiesRepository') private readonly citiesRepository: ICitiesRepository) { }

  public async execute({ state }: IRequest): Promise<City> {

    const user = await this.citiesRepository.findByState(state);

    return user;
  }
}
