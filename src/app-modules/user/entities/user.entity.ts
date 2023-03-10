import { BaseEntity } from "../../../common/entities/base-entity";
import { Column } from "typeorm";

export class UserEntity extends BaseEntity {
	@Column()
	name: string;
}
