import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewMigration1702815109163 implements MigrationInterface {
  name = 'NewMigration1702815109163';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "isEmailVerified" boolean NOT NULL DEFAULT false, "phoneNumber" character varying NOT NULL, "password" character varying NOT NULL, "isPasswordAutoGenerated" boolean NOT NULL DEFAULT false, "profileImageURL" character varying NOT NULL DEFAULT 'https://res.cloudinary.com/aoproton/image/upload/v1592466937/ichurch/uccsobarpmaobunukx6v.png', "isBanned" boolean NOT NULL DEFAULT false, "role" character varying NOT NULL DEFAULT 'user', "emailVerificationToken" character varying NOT NULL, "emailVerificationTokenExpires" TIMESTAMP WITH TIME ZONE NOT NULL, "isDeleted" boolean NOT NULL DEFAULT false, "deletedAt" TIMESTAMP WITH TIME ZONE, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_1e3d0240b49c40521aaeb953293" UNIQUE ("phoneNumber"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}