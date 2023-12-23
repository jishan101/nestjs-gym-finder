import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { DistrictEntity } from '../../district/entities/district.entity';
import { AllowedGenderEnum } from '../enum/allowed-gender.enum';
import { AttributeEnum } from '../enum/attribute.enum';
import { BusinessStatusEnum } from '../enum/business-status.enum';

@Entity('gym')
export class GymEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('int')
  monthly_fee: number;

  @Column({ type: 'enum', enum: AllowedGenderEnum })
  allowed_gender: AllowedGenderEnum;

  @Column()
  location: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true })
  contact: string;

  @Column({ type: 'int', nullable: true })
  rating: number;

  @Column({ type: 'json', nullable: true })
  working_hours: string;

  @Column({
    type: 'enum',
    enum: BusinessStatusEnum,
    default: BusinessStatusEnum.OPERATIONAL,
  })
  business_status: BusinessStatusEnum;

  @Column({ type: 'set', enum: AttributeEnum, nullable: true })
  attributes: AttributeEnum[];

  @ManyToOne(() => DistrictEntity, (district) => district.gyms, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'district_id' })
  district: DistrictEntity;
}
