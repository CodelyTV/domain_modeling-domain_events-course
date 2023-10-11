import { DomainEvent } from "../../../shared/domain/DomainEvent";

export type UserEmailUpdatedDomainEventPrimitives = {
	id: string;
	email: string;
};

export class UserEmailUpdatedDomainEvent extends DomainEvent {
	constructor(
		private readonly id: string,
		private readonly email: string,
	) {
		super();
	}
}
