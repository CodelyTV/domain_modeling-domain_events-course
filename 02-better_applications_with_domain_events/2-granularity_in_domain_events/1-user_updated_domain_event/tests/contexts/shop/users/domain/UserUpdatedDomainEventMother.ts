import { UserPrimitives } from "../../../../../src/contexts/shop/users/domain/User";
import { UserUpdatedDomainEvent } from "../../../../../src/contexts/shop/users/domain/UserUpdatedDomainEvent";
import { UserEmailMother } from "./UserEmailMother";
import { UserIdMother } from "./UserIdMother";
import { UserNameMother } from "./UserNameMother";
import { UserProfilePictureMother } from "./UserProfilePictureMother";

export class UserUpdatedDomainEventMother {
	static create(params?: Partial<UserPrimitives>): UserUpdatedDomainEvent {
		const primitives: UserPrimitives = {
			id: UserIdMother.create().value,
			name: UserNameMother.create().value,
			email: UserEmailMother.create().value,
			profilePicture: UserProfilePictureMother.create().value,
			...params,
		};

		return new UserUpdatedDomainEvent(
			primitives.id,
			primitives.name,
			primitives.email,
			primitives.profilePicture,
		);
	}
}
