import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsInt } from "class-validator";

export default class CreateCustomerDto {
  @ApiProperty({
    description: 'customer name',
    example: 'Lionan Dantas',
  })
  @IsNotEmpty({ message: "Name field is required" })
  name: string;

  @ApiProperty({
    description: 'gender of the customer',
    example: 'Masculino',
  })
  @IsNotEmpty({ message: "Gender field is required" })
  gender: string;

  @ApiProperty({
    description: 'customer birthday',
    example: '1991-03-30',
  })
  @IsNotEmpty({ message: "Birth date field is required" })
  birthDate: Date;

  @ApiProperty({
    description: 'customer city id',
    example: 1,
  })
  @IsInt()
  @IsNotEmpty({ message: "CityId field is required" })
  cityId: number;

}
