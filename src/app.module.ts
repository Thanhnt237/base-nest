import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { join } from "path";
import { ThrottlerModule } from "@nestjs/throttler";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ScheduleModule } from "@nestjs/schedule";
import { WinstonLoggerCustomModule } from "./common/modules/winston/winston.logger.module";
import { ConfigModule } from "@nestjs/config";
import { DatabaseProviderModule } from "./providers/databases/provider.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		DatabaseProviderModule,
		ThrottlerModule.forRoot({
			ttl: 60,
			limit: 10,
		}),
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, "..", "public"),
			exclude: ["/api*"],
			serveStaticOptions: {
				index: "index.html",
			},
			serveRoot: "/public",
		}),
		WinstonLoggerCustomModule,
		ScheduleModule.forRoot(),
	],
	controllers: [AppController],
})
export class AppModule {}
