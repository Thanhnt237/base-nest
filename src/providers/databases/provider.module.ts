import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import mysqlConfig from "../../config/databases/mysql/mysql.config";

@Module({
	imports: [TypeOrmModule.forRootAsync(mysqlConfig)],
})
export class DatabaseProviderModule {}
