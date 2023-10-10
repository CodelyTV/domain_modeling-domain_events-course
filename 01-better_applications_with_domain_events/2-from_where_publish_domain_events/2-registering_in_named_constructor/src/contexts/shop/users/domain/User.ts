import { AggregateRoot } from "../../../shared/domain/AggregateRoot";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserName } from "./UserName";
import { UserProfilePicture } from "./UserProfilePicture";
import { UserRegisteredDomainEvent } from "./UserRegisteredDomainEvent";

export type UserPrimitives = {
	id: string;
	name: string;
	email: string;
	profilePicture: string;
};

export class User extends AggregateRoot {
	private constructor(
		public readonly id: UserId,
		private readonly name: UserName,
		private readonly email: UserEmail,
		private readonly profilePicture: UserProfilePicture,
	) {
		super();
	}

	static create(id: string, name: string, email: string, profilePicture: string): User {
		const user = new User(
			new UserId(id),
			new UserName(name),
			new UserEmail(email),
			new UserProfilePicture(profilePicture),
		);

		user.record(new UserRegisteredDomainEvent(id, name, email, profilePicture));

		return user;
	}

	static fromPrimitives(primitives: UserPrimitives): User {
		return new User(
			new UserId(primitives.id),
			new UserName(primitives.name),
			new UserEmail(primitives.email),
			new UserProfilePicture(primitives.profilePicture),
		);
	}

	toPrimitives(): UserPrimitives {
		return {
			id: this.id.value,
			name: this.name.value,
			email: this.email.value,
			profilePicture: this.profilePicture.value,
		};
	}
}
