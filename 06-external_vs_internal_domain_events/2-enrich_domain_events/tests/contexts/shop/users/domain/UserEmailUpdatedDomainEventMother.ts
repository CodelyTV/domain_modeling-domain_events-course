import { UserEmailUpdatedDomainEvent } from "../../../../../src/contexts/shared/domain/shop/users/UserEmailUpdatedDomainEvent";
import { UserPrimitives } from "../../../../../src/contexts/shop/users/domain/User";
import { UserStatus } from "../../../../../src/contexts/shop/users/domain/UserStatus";
import { DateMother } from "./DateMother";
import { UserEmailMother } from "./UserEmailMother";
import { UserIdMother } from "./UserIdMother";
import { UserNameMother } from "./UserNameMother";
import { UserProfilePictureMother } from "./UserProfilePictureMother";

export class UserEmailUpdatedDomainEventMother {
	static create(
		params?: Partial<UserPrimitives> & { occurredOn?: Date },
	): UserEmailUpdatedDomainEvent {
		const primitives: UserPrimitives & { occurredOn?: Date } = {
			id: UserIdMother.create().value,
			name: UserNameMother.create().value,
			email: UserEmailMother.create().value,
			profilePicture: UserProfilePictureMother.create().value,
			status: UserStatus.Active,
			...params,
		};

		return new UserEmailUpdatedDomainEvent(
			primitives.id,
			primitives.name,
			primitives.email,
			primitives.profilePicture,
			primitives.status,
			primitives.occurredOn,
		);
	}

	static fromToday(): UserEmailUpdatedDomainEvent {
		return UserEmailUpdatedDomainEventMother.create({ occurredOn: DateMother.today() });
	}

	static fromYesterday(): UserEmailUpdatedDomainEvent {
		return UserEmailUpdatedDomainEventMother.create({ occurredOn: DateMother.yesterday() });
	}
}
