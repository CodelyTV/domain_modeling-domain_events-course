import { EventBus } from "../../../shared/domain/EventBus";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserName } from "./UserName";
import { UserProfilePicture } from "./UserProfilePicture";
import { UserRegisteredDomainEvent } from "./UserRegisteredDomainEvent";
import { UserRepository } from "./UserRepository";

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

	static create(repository: UserRepository, eventBus: EventBus) {
		return async (
			id: string,
			name: string,
			email: string,
			profilePicture: string,
		): Promise<void> => {
			const user = new User(
				new UserId(id),
				new UserName(name),
				new UserEmail(email),
				new UserProfilePicture(profilePicture),
			);
			await repository.save(user);
			await eventBus.publish([new UserRegisteredDomainEvent(id, name, email, profilePicture)]);
		};
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
