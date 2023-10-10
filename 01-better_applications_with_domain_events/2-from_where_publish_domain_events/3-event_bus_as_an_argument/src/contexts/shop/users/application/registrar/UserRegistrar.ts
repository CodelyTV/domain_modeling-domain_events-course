import { EventBus } from "../../../../shared/domain/EventBus";
import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";

export class UserRegistrar {
	constructor(
		private readonly repository: UserRepository,
		private readonly eventBus: EventBus,
	) {}

	async registrar(id: string, name: string, email: string, profilePicture: string): Promise<void> {
		await User.create(this.repository, this.eventBus)(id, name, email, profilePicture);
	}
}
