import { DataSourceOptions } from "typeorm";
import { join } from "path";

export const datasourceConfig: DataSourceOptions = {
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
};
