import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CityDto } from 'src/modules/cities/dtos/city.dto';
import CreateCityDto from 'src/modules/cities/dtos/create-city.dto';
import City from 'src/modules/cities/infra/typeorm/entities/city.entity';
import { CreateCityService } from 'src/modules/cities/services/create-city/create-city.service';
import { FindByNameService } from 'src/modules/cities/services/find-by-name/find-by-name.service';
import { FindByStateService } from 'src/modules/cities/services/find-by-state/find-by-state.service';


@ApiTags('cities')
@Controller('cities')
export class CitiesController {
  constructor(
    private readonly findByNameService: FindByNameService,
    private readonly findByStateService: FindByStateService,
    private readonly createCityService: CreateCityService) { }

  @Get('findByName')
  @ApiOperation({
    summary: 'Find city by name',
  })
  @ApiQuery({
    name: 'name',
    type: String,
    description: 'The city name',
  })
  @ApiOkResponse({ description: 'City founded.', type: CityDto })
  @ApiNotFoundResponse({
    description: 'returns the city by the name searched.',
    type: String,
  })
  async findByName(@Query('name') name: string): Promise<CityDto> {

    const city = await this.findByNameService.execute({ name: name });

    return CityDto.toDto(city);
  }


  @Get('findByState')
  @ApiOperation({
    summary: 'Find city by state',
  })
  @ApiQuery({
    name: 'state',
    type: String,
    description: 'State by city',
  })
  @ApiOkResponse({ description: 'City founded.', type: City })
  @ApiNotFoundResponse({
    description: 'returns the city by the state searched.',
    type: String,
  })
  async findByState(@Query('state') state: string): Promise<CityDto> {

    const city = await this.findByStateService.execute({ state: state });

    return CityDto.toDto(city);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new city',
  })
  @ApiCreatedResponse({ description: 'City created.', type: CityDto })
  async create(
    @Body() request: CreateCityDto,
  ): Promise<CityDto> {

    const city = await this.createCityService.execute(request);

    return CityDto.toDto(city);
  }
}
