import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "../../app-modules/users/user.service";
import { SECRET } from "../constants/secret.config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private userService: UserService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: SECRET,
		});
	}

	async validate(payload: any): Promise<any> {
		const user = await this.userService.repository().findOne({
			where: { id: payload?.id },
			select: ["id"],
		});

		if (!user) {
			throw new UnauthorizedException();
		}

		return user;
	}
}
