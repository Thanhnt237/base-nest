import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { initializeTransactionalContext } from "typeorm-transactional";
import "reflect-metadata";

async function bootstrap() {
	initializeTransactionalContext();

	const app = await NestFactory.create(AppModule, {
		cors: true,
		abortOnError: true,
	});

	/**
	 * @description Swagger
	 */
	const options = new DocumentBuilder()
		.setTitle("Nest-Base")
		.setDescription("Nest-Base API description")
		.setVersion("1.0")
		.addBearerAuth()
		.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup("/docs", app, document, {
		swaggerOptions: {
			defaultModelsExpandDepth: -1,
		},
	});

	await app.listen(process.env.PORT || 8000, () => {
		console.log("Nest application started");
	});
}
bootstrap();
