import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { Role } from "../constants/role.enum";
import { RolesGuard } from "../guard/roles.guard";
import { ROLES_KEY } from "./roles.decorator";

export function Auth(...roles: Role[]) {
	return applyDecorators(
		SetMetadata(ROLES_KEY, roles),
		UseGuards(
			RolesGuard,
			// PermissionsGuard
		),
	);
}
