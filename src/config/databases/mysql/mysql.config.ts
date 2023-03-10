import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";

export const mysqlConfig: TypeOrmModuleOptions = {
	type: "mysql",
	host: process.env.MYSQL_HOST,
	port: +process.env.MYSQL_PORT,
	username: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASS,
	database: process.env.MYSQL_DB,
	charset: "utf8mb4",
	synchronize: process.env.NODE_ENV !== "production",
	logging: process.env.NODE_ENV === "local",
	entities: [join(__dirname, "..", "dist/src/app-modules/**/*.entity{.ts,.js}")],
};
