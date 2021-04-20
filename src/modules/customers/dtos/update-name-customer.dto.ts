import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export default class UpdateNameCustomerDto {
  @ApiProperty({
    description: 'name customer',
    example: 'Lionan Silva',
  })
  @IsNotEmpty({ message: "Name field is required" })
  name: string;
}
