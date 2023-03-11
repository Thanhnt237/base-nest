import { Injectable } from "@nestjs/common";
import { UserService } from "../app-modules/users/user.service";
import { LoginUserDto } from "./dto/login-user.dto";

@Injectable()
export class AuthService {
	constructor(private userService: UserService) {}

	async login(dto: LoginUserDto) {
		return dto;
	}
}
