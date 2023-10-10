import { EventBus } from "../../../../shared/domain/EventBus";
import { User } from "../../domain/User";
import { UserRegisteredDomainEvent } from "../../domain/UserRegisteredDomainEvent";
import { UserRepository } from "../../domain/UserRepository";

export class UserRegistrar {
	constructor(
		private readonly repository: UserRepository,
		private readonly eventBus: EventBus,
	) {}

	async create(id: string, name: string, email: string, profilePicture: string): Promise<void> {
		const user = User.create(id, name, email, profilePicture);

		await this.repository.save(user);
		await this.eventBus.publish([new UserRegisteredDomainEvent(id, name, email, profilePicture)]);
	}
}
