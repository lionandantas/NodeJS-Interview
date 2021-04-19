import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import City from 'src/modules/cities/city.entity';
import { BaseController } from 'src/shared/base/base.controller';
import { CitiesService } from './cities.service';


@ApiTags('cities')
@Controller('cities')
export class CitiesController extends BaseController<City>{

  constructor(private readonly citiesService: CitiesService) {
    super(citiesService)
  }
}
