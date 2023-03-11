import { DataSourceOptions } from "typeorm";
import { join } from "path";
import { SeederOptions } from "typeorm-extension";

export const datasourceConfig: DataSourceOptions & SeederOptions = {
	migrationsTableName: "migrations",
	type: "mysql",
	host: process.env.MYSQL_HOST,
	port: +process.env.MYSQL_PORT,
	username: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASS,
	database: process.env.MYSQL_DB,
	logging: false,
	entities: [join(__dirname, "..", "dist/**/*.entity.{js,ts}")],
	migrations: [join(__dirname, "..", "dist/databases/migrations/*.{js,ts}")],
	seeds: ["dist/databases/seeders/seeds/*.seed.js"],
	factories: ["dist/databases/factories/*.factory.js"],
	charset: "utf8mb4_unicode_ci",
};
