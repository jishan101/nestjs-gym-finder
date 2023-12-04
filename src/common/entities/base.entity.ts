import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class BaseEntity {
  @CreateDateColumn({
    type: 'timestamp',
  })
  created_at: Date;

  @Column({ nullable: true })
  created_by: string;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updated_at: Date;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ default: true })
  is_active: boolean;
}
