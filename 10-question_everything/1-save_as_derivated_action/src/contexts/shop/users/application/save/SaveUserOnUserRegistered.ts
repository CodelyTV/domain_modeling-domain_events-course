import { DomainEventName } from "../../../../shared/domain/event/DomainEventName";
import { DomainEventSubscriber } from "../../../../shared/domain/event/DomainEventSubscriber";
import { UserRegisteredDomainEvent } from "../../domain/UserRegisteredDomainEvent";
import { UserSaver } from "./UserSaver";

export class SaveUserOnUserRegistered
	implements DomainEventSubscriber<UserRegisteredDomainEvent>
{
	constructor(private readonly saver: UserSaver) {}

	async on(event: UserRegisteredDomainEvent): Promise<void> {
		await this.saver.save(
			event.id,
			event.name,
			event.email,
			event.profilePicture,
			event.status,
		);
	}

	subscribedTo(): DomainEventName<UserRegisteredDomainEvent>[] {
		return [UserRegisteredDomainEvent];
	}
}
