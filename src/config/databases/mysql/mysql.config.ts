import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { addTransactionalDataSource } from "typeorm-transactional";
import { NodeEnv } from "../../../common/constants/node-env";
import { join } from "path";

export const mysqlOrmConfigOptions: TypeOrmModuleAsyncOptions = {
	imports: [ConfigModule],
	useFactory: (configService: ConfigService) => {
		return {
			type: "mysql",
			host: process.env.MYSQL_HOST,
			port: +process.env.MYSQL_PORT,
			username: process.env.MYSQL_USER,
			password: process.env.MYSQL_PASSWORD,
			database: process.env.MYSQL_DATABASE,
			autoLoadEntities: true,
			synchronize: true,
			charset: "utf8mb4",
			logging: process.env.NODE_ENV === NodeEnv.LOCAL,
			entities: [join(__dirname, "..", "dist/**/*.entity.js")],
			// useUTC: true,
		};
	},
	async dataSourceFactory(options) {
		if (!options) {
			throw new Error("Invalid options passed");
		}

		return addTransactionalDataSource(new DataSource(options));
	},
	inject: [ConfigService],
};

export default mysqlOrmConfigOptions;
