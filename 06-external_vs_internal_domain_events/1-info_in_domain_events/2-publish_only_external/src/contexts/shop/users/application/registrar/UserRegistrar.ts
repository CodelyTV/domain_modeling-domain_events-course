import { InternalEventBus } from "../../../../shared/domain/InternalEventBus";
import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";

export class UserRegistrar {
	constructor(
		private readonly repository: UserRepository,
		private readonly eventBus: InternalEventBus,
	) {}

	async registrar(id: string, name: string, email: string, profilePicture: string): Promise<void> {
		const user = User.create(id, name, email, profilePicture);

		await this.repository.save(user);
		await this.eventBus.publish(user.pullDomainEvents());
	}
}
