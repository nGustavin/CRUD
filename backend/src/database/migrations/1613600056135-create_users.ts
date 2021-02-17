import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1613600056135 implements MigrationInterface {
  
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "users",
      columns: [
        {
          name: "id",
          type: "integer",
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment"
        },
        {
          name: "name",
          type: "varchar",
          onUpdate: "CASCADE"
        },
        {
          name: "email",
          type: "varchar",
          onUpdate: "CASCADE"
        },
        {
          name: "cpf",
          type: "number",
          onUpdate: "CASCADE"
        },
        {
          name: "about",
          type: "varchar",
          onUpdate: "CASCADE"
        },
        {
          name: "github",
          type: "varchar",
          onUpdate: "CASCADE"
        }
      ]
    }))
  }
  
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
  
}
