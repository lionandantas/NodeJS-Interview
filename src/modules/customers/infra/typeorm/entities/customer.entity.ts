import { Expose } from 'class-transformer';
import { Entity, Column, JoinColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
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
  @ManyToOne(() => City)
  @JoinColumn({ name: 'cityId' })
  city: City;

  @Expose({ name: "age" })
  get age(): number {
    if (this.birthDate == null)
      return 0;
    const timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
    return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);

  }

  @Expose({ name: "region" })
  get region(): string {
    if (this.city == null)
      return null;
    return this.city.state;
  }

  @Expose({ name: "cityName" })
  get cityName(): string {
    if (this.city == null)
      return null;
    return this.city.name;
  }

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
export default Customer;
