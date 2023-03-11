import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { PERMISSIONS_KEY } from "../decorator/permissions.decorator";

@Injectable()
export class PermissionsGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
		const permissions = this.reflector.get<string[]>(PERMISSIONS_KEY, context.getHandler());

		if (!permissions) {
			return true;
		}

		const { user } = context.switchToHttp().getRequest();
		console.log(user);
		if (!user) return false;

		const getFirstPermission = permissions[0];

		return user?.permissions && user.permissions.includes(getFirstPermission);
		// return true
	}
}
