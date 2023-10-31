import { InternalEventBus } from "../../../../shared/domain/InternalEventBus";
import { UserFinder } from "../../domain/UserFinder";
import { UserRepository } from "../../domain/UserRepository";

export class UserEmailUpdater {
	private readonly finder: UserFinder;

	constructor(
		private readonly repository: UserRepository,
		private readonly eventBus: InternalEventBus,
	) {
		this.finder = new UserFinder(repository);
	}

	async update(id: string, email: string): Promise<void> {
		const user = await this.finder.find(id);

		user.updateEmail(email);

		await this.repository.save(user);
		await this.eventBus.publish(user.pullDomainEvents());
	}
}
