import { ApiProperty } from "@nestjs/swagger";
import { Expose, plainToClass } from "class-transformer";
import Customer from "../infra/typeorm/entities/customer.entity";

export class CustomerDto {
  @Expose()
  @ApiProperty({
    description: 'id of the customer',
    example: 1,
  })
  id: number;

  @Expose()
  @ApiProperty({
    description: 'The name of the customer',
    example: 'Lionan Dantas',
  })
  name: string;

  @Expose()
  @ApiProperty({
    description: 'The unique email of the user',
    example: 'john.doe@gmail.com',
  })
  email: string;

  @Expose()
  @ApiProperty({ description: 'The age of the customer' })
  age: number;

  @Expose()
  @ApiProperty({ description: 'The city of the customer' })
  cityName: string;

  @Expose()
  @ApiProperty({ description: 'The state of the customer' })
  region: string;

  @Expose()
  @ApiProperty({ description: 'The gender of the customer' })
  gender: string;

  @Expose()
  @ApiProperty({ description: 'The birth date of the customer' })
  birthDate: string;

  @Expose()
  @ApiProperty({ description: 'The crational date of the customer' })
  createdAt: Date;

  @Expose()
  @ApiProperty({ description: 'The date of the last customer update' })
  updatedAt: Date;



  static toDto(customer: Customer): CustomerDto {
    return plainToClass(CustomerDto, customer, { excludeExtraneousValues: true });
  }
}
