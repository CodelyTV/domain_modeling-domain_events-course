import { DomainEventName } from "../../../../shared/domain/DomainEventName";
import { DomainEventSubscriber } from "../../../../shared/domain/DomainEventSubscriber";
import { UserEmailUpdatedDomainEvent } from "../../../../shared/domain/shop/users/UserEmailUpdatedDomainEvent";
import { UserArchivedDomainEvent } from "../../../../shop/users/domain/UserArchivedDomainEvent";
import { UserLastActivityUpdater } from "./UserLastActivityUpdater";

export class UpdateLastActivityDateOnUserUpdated
	implements DomainEventSubscriber<UserArchivedDomainEvent | UserEmailUpdatedDomainEvent>
{
	constructor(private readonly updater: UserLastActivityUpdater) {}

	async on(event: UserArchivedDomainEvent | UserEmailUpdatedDomainEvent): Promise<void> {
		await this.updater.update(event.id, event.occurredOn);
	}

	subscribedTo(): DomainEventName<UserArchivedDomainEvent | UserEmailUpdatedDomainEvent>[] {
		return [UserArchivedDomainEvent, UserEmailUpdatedDomainEvent];
	}
}
