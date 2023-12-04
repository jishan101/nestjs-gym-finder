import { MigrationInterface, QueryRunner } from 'typeorm';

export class DistrictOnDelete1701701949185 implements MigrationInterface {
  name = 'DistrictOnDelete1701701949185';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`district\` DROP FOREIGN KEY \`FK_3212c7b175a6bb4bcf82ff2b899\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`district\` ADD CONSTRAINT \`FK_3212c7b175a6bb4bcf82ff2b899\` FOREIGN KEY (\`division_id\`) REFERENCES \`division\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`district\` DROP FOREIGN KEY \`FK_3212c7b175a6bb4bcf82ff2b899\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`district\` ADD CONSTRAINT \`FK_3212c7b175a6bb4bcf82ff2b899\` FOREIGN KEY (\`division_id\`) REFERENCES \`division\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
