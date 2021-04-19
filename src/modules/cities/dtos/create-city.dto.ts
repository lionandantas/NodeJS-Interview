import { ApiProperty } from '@nestjs/swagger';

export default class CreateCityDto {
  @ApiProperty({
    description: 'The name of the city',
    example: 'Vila Velha',
  })
  name: string;
  @ApiProperty({
    description: 'The state of the city',
    example: 'ES',
  })
  state: string;
}
