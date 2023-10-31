import { DomainEvent } from "../../domain/DomainEvent";
import { ExternalEventBus } from "../../domain/ExternalEventBus";

export class ExternalDomainEventPublisher {
	constructor(private readonly bus: ExternalEventBus) {}

	async publish(event: DomainEvent): Promise<void> {
		if (event.isExternal()) {
			await this.bus.publish(event);
		}
	}
}
