import { DomainEvent } from "../../../shared/domain/DomainEvent";

export type UserStatusUpdatedDomainEventPrimitives = {
	id: string;
};

export class UserArchivedDomainEvent extends DomainEvent {
	static eventName = "user.archived";

	constructor(
		public readonly id: string,
		occurredOn?: Date,
	) {
		super(UserArchivedDomainEvent.eventName, occurredOn);
	}

	isExternal(): boolean {
		return false;
	}
}
