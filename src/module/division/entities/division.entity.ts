import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { DistrictEntity } from '../../district/entities/district.entity';

@Entity('division')
export class DivisionEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => DistrictEntity, (district) => district.division, {
    cascade: true,
  })
  districts: DistrictEntity[];
}
