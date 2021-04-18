import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import City from 'src/modules/cities/city.entity';


@Module({
    providers: [CitiesService],
    controllers: [CitiesController],
    exports: [CitiesService],
    imports: [TypeOrmModule.forFeature([City])],
})
export class CitiesModule { }

