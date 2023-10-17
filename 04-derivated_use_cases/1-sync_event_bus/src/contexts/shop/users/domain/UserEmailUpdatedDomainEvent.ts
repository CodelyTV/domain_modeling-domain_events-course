import { DomainEvent } from "../../../shared/domain/event/DomainEvent";

export type UserEmailUpdatedDomainEventPrimitives = {
	id: string;
	email: string;
};

export class UserEmailUpdatedDomainEvent extends DomainEvent {
	static eventName = "user.email.updated";

	constructor(
		public readonly id: string,
		public readonly email: string,
		occurredOn?: Date,
	) {
		super(UserEmailUpdatedDomainEvent.eventName, occurredOn);
	}
}
