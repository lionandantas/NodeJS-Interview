import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export default class CreateCityDto {
  @ApiProperty({
    description: 'The name of the city',
    example: 'Vila Velha',
  })
  @IsNotEmpty({ message: "Name field is required" })
  name: string;

  @ApiProperty({
    description: 'The state of the city',
    example: 'ES',
  })
  @IsNotEmpty({ message: "State field is required" })
  state: string;
}
