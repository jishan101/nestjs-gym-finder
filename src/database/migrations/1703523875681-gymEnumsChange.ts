import { MigrationInterface, QueryRunner } from 'typeorm';

export class GymEnumsChange1703523875681 implements MigrationInterface {
  name = 'GymEnumsChange1703523875681';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`gym\` CHANGE \`allowed_gender\` \`allowed_gender\` enum ('Male', 'Female', 'Combined') NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`gym\` CHANGE \`business_status\` \`business_status\` enum ('Operational', 'Non Operational') NOT NULL DEFAULT 'Operational'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`gym\` CHANGE \`attributes\` \`attributes\` set ('Air Condition', 'Parking', 'Juice Bar', 'Treadmill', 'Locker', 'Steam Room') NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`gym\` CHANGE \`attributes\` \`attributes\` set ('Air Condition', 'Parking', 'Juice Bar', 'Treadmill', 'Locker', 'Shower') NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`gym\` CHANGE \`business_status\` \`business_status\` enum ('Operational', 'Closed') NOT NULL DEFAULT 'Operational'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`gym\` CHANGE \`allowed_gender\` \`allowed_gender\` enum ('Male', 'Female', 'Both') NOT NULL`,
    );
  }
}
