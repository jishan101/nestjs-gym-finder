import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { DivisionEntity } from '../../division/entities/division.entity';

@Entity('district')
export class DistrictEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => DivisionEntity, (division) => division.districts, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'division_id' })
  division: DivisionEntity;
}
