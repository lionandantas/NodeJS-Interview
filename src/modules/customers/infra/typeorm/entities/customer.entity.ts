import { Expose } from 'class-transformer';
import { BaseEntity } from 'src/shared/base/base.entity';
import { Entity, Column, JoinColumn, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import City from '../../../../cities/infra/typeorm/entities/city.entity';

@Entity('customers')
class Customer {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  birthDate: Date;

  @Column()
  city_id: number;
  @OneToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city: City;

  @Expose({ name: "age" })
  age(): number {
    const timeDiff = Math.abs(Date.now() - this.birthDate.getTime());
    return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  }

  @Expose({ name: "region" })
  region(): string {
    return this.city.state;
  }
  @Expose({ name: "cityName" })
  cityName(): string {
    return this.city.name;
  }

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Customer;
