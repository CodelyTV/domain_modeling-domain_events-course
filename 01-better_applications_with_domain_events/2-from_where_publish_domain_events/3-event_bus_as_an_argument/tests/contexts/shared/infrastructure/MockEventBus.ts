import { DomainEvent } from "../../../../src/contexts/shared/domain/DomainEvent";
import { EventBus } from "../../../../src/contexts/shared/domain/EventBus";

export class MockEventBus implements EventBus {
	private readonly mockPublish = jest.fn();

	async publish(events: DomainEvent[]): Promise<void> {
		expect(this.mockPublish).toHaveBeenCalledWith(events);
	}

	shouldPublish(events: DomainEvent[]): void {
		this.mockPublish(events);
	}
}
