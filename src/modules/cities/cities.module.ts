import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import City from 'src/modules/cities/infra/typeorm/entities/city.entity';
import { CitiesController } from './infra/http/controllers/cities.controller';
import CitiesRepository from './infra/typeorm/repositories/cities.repository';
import { FindByNameService } from './services/find-by-name/find-by-name.service';
import { FindByStateService } from './services/find-by-state/find-by-state.service';
import { CreateCityService } from './services/create-city/create-city.service';



@Module({
  providers: [
    {
      provide: 'ICitiesRepository',
      useClass: CitiesRepository
    },
    FindByNameService,
    FindByStateService,
    CreateCityService
  ],
  controllers: [CitiesController],
  exports: [],
  imports: [TypeOrmModule.forFeature([City])],
})
export class CitiesModule { }

