import { Expose } from 'class-transformer';
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
  cityId: number;
  @OneToOne(() => City)
  @JoinColumn({ name: 'cityId' })
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
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
export default Customer;
