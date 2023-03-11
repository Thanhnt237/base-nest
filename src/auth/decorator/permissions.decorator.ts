import { SetMetadata } from "@nestjs/common";
import { UserPermission } from "../constants/role.enum";

export const PERMISSIONS_KEY = "permissions";
export const Permissions = (...permissions: UserPermission[]) => SetMetadata(PERMISSIONS_KEY, permissions);
