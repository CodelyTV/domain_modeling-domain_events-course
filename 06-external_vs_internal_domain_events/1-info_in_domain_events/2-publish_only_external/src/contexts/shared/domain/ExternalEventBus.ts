import { DomainEvent } from "./DomainEvent";

export interface ExternalEventBus {
	publish(event: DomainEvent): Promise<void>;
}
