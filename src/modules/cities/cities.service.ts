import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import City from 'src/modules/cities/city.entity';
import { BaseService } from 'src/shared/base/base.service';
import { Repository } from 'typeorm';

@Injectable()
export class CitiesService extends BaseService<City> {

  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>) {
    super(cityRepository);
  }


  public async findByName(name: string): Promise<City | undefined> {

    const city = await this.cityRepository.findOne({
      where: {
        name: name
      }
    });

    return city;
  }

  public async findByState(state: string): Promise<City | undefined> {

    const city = await this.cityRepository.findOne({
      where: {
        state: state
      }
    });

    return city;
  }
}
