import { DomainEvent } from "./DomainEvent";

export interface InternalEventBus {
	publish(events: DomainEvent[]): Promise<void>;
}
