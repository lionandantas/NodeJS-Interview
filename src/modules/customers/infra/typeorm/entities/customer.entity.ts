import { BaseEntity } from 'src/shared/base/base.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import City from '../../../../cities/infra/typeorm/entities/city.entity';

@Entity('customers')
class Customer extends BaseEntity {

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  birthDate: Date;

  @Column()
  city_id: number;

  @ManyToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city: City;
}
export default Customer;
