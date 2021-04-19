import { ApiProperty } from "@nestjs/swagger";

export default class UpdateNameCustomerDto {
  @ApiProperty({
    description: 'name customer',
    example: 'Lionan Silva',
  })
  name: string;
}
