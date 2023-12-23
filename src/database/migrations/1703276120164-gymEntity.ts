import { MigrationInterface, QueryRunner } from 'typeorm';

export class GymEntity1703276120164 implements MigrationInterface {
  name = 'GymEntity1703276120164';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`gym\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` varchar(255) NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`monthly_fee\` int NOT NULL, \`allowed_gender\` enum ('Male', 'Female', 'Both') NOT NULL, \`location\` varchar(255) NOT NULL, \`website\` varchar(255) NULL, \`contact\` varchar(255) NULL, \`rating\` int NULL, \`working_hours\` json NULL, \`business_status\` enum ('Operational', 'Closed') NOT NULL DEFAULT 'Operational', \`attributes\` set ('Air Condition', 'Parking', 'Juice Bar', 'Treadmill', 'Locker', 'Shower') NULL, \`district_id\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`gym\` ADD CONSTRAINT \`FK_3a278b2e3b5945b3aefdbb5bb69\` FOREIGN KEY (\`district_id\`) REFERENCES \`district\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`gym\` DROP FOREIGN KEY \`FK_3a278b2e3b5945b3aefdbb5bb69\``,
    );
    await queryRunner.query(`DROP TABLE \`gym\``);
  }
}
