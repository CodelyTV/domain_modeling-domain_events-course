import { EventBus } from "../../../../shared/domain/event/EventBus";
import { User } from "../../domain/User";

export class UserRegistrar {
	constructor(private readonly eventBus: EventBus) {}

	async registrar(
		id: string,
		name: string,
		email: string,
		profilePicture: string,
	): Promise<void> {
		const user = User.create(id, name, email, profilePicture);

		await this.eventBus.publish(user.pullDomainEvents());
	}
}
