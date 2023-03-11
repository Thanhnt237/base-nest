import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEY } from "../decorator/roles.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
		const roles = this.reflector.get<string[]>(ROLES_KEY, context.getHandler());
		if (!roles) {
			return true;
		}
		const { user } = context.switchToHttp().getRequest();
		console.log(user);
		if (!user) return false;

		return user?.role && roles.includes(user.role);
	}
}
