import { Module } from "@nestjs/common";
import { UserModule } from "../app-modules/users/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
	imports: [UserModule],
	providers: [AuthService],
	exports: [AuthService],
	controllers: [AuthController],
})
export class AuthModule {}
