import { EventBus } from "../../../../shared/domain/EventBus";
import { User } from "../../domain/User";
import { UserDoesNotExist } from "../../domain/UserDoesNotExist";
import { UserId } from "../../domain/UserId";
import { UserRepository } from "../../domain/UserRepository";

export class UserEmailUpdater {
	constructor(
		private readonly repository: UserRepository,
		private readonly eventBus: EventBus,
	) {}

	async update(id: string, email: string): Promise<void> {
		const user = await this.findUser(id);

		user.updateEmail(email);

		await this.repository.save(user);
		await this.eventBus.publish(user.pullDomainEvents());
	}

	private async findUser(id: string): Promise<User> {
		const user = await this.repository.search(new UserId(id));

		if (user === null) {
			throw new UserDoesNotExist(id);
		}

		return user;
	}
}
