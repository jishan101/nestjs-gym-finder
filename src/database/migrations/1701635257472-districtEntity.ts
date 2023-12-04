import { MigrationInterface, QueryRunner } from 'typeorm';

export class DistrictEntity1701635257472 implements MigrationInterface {
  name = 'DistrictEntity1701635257472';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`district\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` varchar(255) NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`division_id\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`district\` ADD CONSTRAINT \`FK_3212c7b175a6bb4bcf82ff2b899\` FOREIGN KEY (\`division_id\`) REFERENCES \`division\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`district\` DROP FOREIGN KEY \`FK_3212c7b175a6bb4bcf82ff2b899\``,
    );
    await queryRunner.query(`DROP TABLE \`district\``);
  }
}
