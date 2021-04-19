import { ApiProperty } from "@nestjs/swagger";

export default class CreateCustomerDto {
  @ApiProperty({
    description: 'customer name',
    example: 'Lionan Dantas',
  })
  name: string;

  @ApiProperty({
    description: 'gender of the customer',
    example: 'Masculino',
  })
  gender: string;

  @ApiProperty({
    description: 'customer birthday',
    example: '1991-03-30',
  })
  birthDate: Date;

  @ApiProperty({
    description: 'customer city id',
    example: 1,
  })
  city_id: number;

}
