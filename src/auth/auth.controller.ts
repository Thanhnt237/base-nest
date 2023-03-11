import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dto/login-user.dto";

@ApiTags("Auth")
@Controller()
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("/login")
	async login(@Body() dto: LoginUserDto): Promise<LoginUserDto> {
		return await this.authService.login(dto);
	}
}
