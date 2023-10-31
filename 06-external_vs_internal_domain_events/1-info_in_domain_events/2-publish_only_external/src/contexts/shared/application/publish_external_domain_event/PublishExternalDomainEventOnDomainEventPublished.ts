import { DomainEvent } from "../../domain/DomainEvent";
import { DomainEventName } from "../../domain/DomainEventName";
import { DomainEventSubscriber } from "../../domain/DomainEventSubscriber";
import { ExternalDomainEventPublisher } from "./ExternalDomainEventPublisher";

export class PublishExternalDomainEventOnDomainEventPublished
	implements DomainEventSubscriber<DomainEvent>
{
	constructor(private readonly publisher: ExternalDomainEventPublisher) {}

	async on(event: DomainEvent): Promise<void> {
		await this.publisher.publish(event);
	}

	subscribedTo(): DomainEventName<DomainEvent>[] {
		return [DomainEvent];
	}
}
