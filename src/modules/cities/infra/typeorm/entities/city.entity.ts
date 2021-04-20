

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('cities')
class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  state: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default City;
