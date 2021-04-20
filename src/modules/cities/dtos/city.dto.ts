import { ApiProperty } from "@nestjs/swagger";
import { Expose, plainToClass } from "class-transformer";
import City from "../infra/typeorm/entities/city.entity";

export class CityDto {
    @Expose()
    @ApiProperty({
        description: 'id of the city',
        example: 1,
    })
    id: number;

    @Expose()
    @ApiProperty({
        description: 'The name of the city',
        example: 'Vila Velha',
    })
    name: string;

    @Expose()
    @ApiProperty({
        description: 'The state of the city',
        example: 'ES',
    })
    state: string;

    @Expose()
    @ApiProperty({ description: 'The crational date of the customer' })
    createdAt: Date;

    @Expose()
    @ApiProperty({ description: 'The date of the last customer update' })
    updatedAt: Date;

    static toDto(city: City): CityDto {
        return plainToClass(CityDto, city, { excludeExtraneousValues: true });
    }
}
