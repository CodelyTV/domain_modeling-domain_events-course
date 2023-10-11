import { UserStatus } from "../../../../../src/contexts/shop/users/domain/UserStatus";
import {
	UserStatusUpdatedDomainEvent,
	UserStatusUpdatedDomainEventPrimitives,
} from "../../../../../src/contexts/shop/users/domain/UserStatusUpdatedDomainEvent";
import { EnumMother } from "../../../shared/domain/EnumMother";
import { UserIdMother } from "./UserIdMother";

export class UserStatusUpdatedDomainEventMother {
	static create(
		params?: Partial<UserStatusUpdatedDomainEventPrimitives>,
	): UserStatusUpdatedDomainEvent {
		const primitives = {
			id: UserIdMother.create().value,
			status: EnumMother.randomFrom(UserStatus),
			...params,
		};

		return new UserStatusUpdatedDomainEvent(primitives.id, primitives.status);
	}
}
