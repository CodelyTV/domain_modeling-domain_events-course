import { DomainEventName } from "../../../../shared/domain/DomainEventName";
import { DomainEventSubscriber } from "../../../../shared/domain/DomainEventSubscriber";
import { UserRegisteredDomainEvent } from "../../../../shop/users/domain/UserRegisteredDomainEvent";
import { WelcomeEmailSender } from "./WelcomeEmailSender";

export class SendWelcomeEmailOnUserRegistered
	implements DomainEventSubscriber<UserRegisteredDomainEvent>
{
	constructor(private readonly sender: WelcomeEmailSender) {}

	async on(event: UserRegisteredDomainEvent): Promise<void> {
		await this.sender.send(event.id, event.name, event.email);
	}

	subscribedTo(): DomainEventName<UserRegisteredDomainEvent>[] {
		return [UserRegisteredDomainEvent];
	}
}
