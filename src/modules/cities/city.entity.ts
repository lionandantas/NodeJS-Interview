import { BaseEntity } from 'src/shared/base/base.entity';
import { Entity, Column } from 'typeorm';

@Entity('cities')
class City extends BaseEntity {

    @Column()
    name: string;

    @Column()
    state: string;
}
export default City;
