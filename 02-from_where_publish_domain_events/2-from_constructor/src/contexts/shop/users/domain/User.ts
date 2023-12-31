import { EventBus } from "../../../shared/domain/EventBus";
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

export class User {
	private constructor(
		public readonly id: UserId,
		private readonly name: UserName,
		private readonly email: UserEmail,
		private readonly profilePicture: UserProfilePicture,
	) {}

	static async create(id: string, name: string, email: string, profilePicture: string): User {
		const user = new User(
			new UserId(id),
			new UserName(name),
			new UserEmail(email),
			new UserProfilePicture(profilePicture),
		);
		await EventBus.publish([
			new UserRegisteredDomainEvent(id.value, name.value, email.value, profilePicture.value),
		]);

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
