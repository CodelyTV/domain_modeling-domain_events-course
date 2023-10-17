import { DomainEvent } from "../../../shared/domain/DomainEvent";

export type UserEmailUpdatedDomainEventPrimitives = {
	id: string;
	email: string;
};

export class UserEmailUpdatedDomainEvent extends DomainEvent {
	constructor(
		public readonly id: string,
		public readonly email: string,
	) {
		super("user.email.updated");
	}
}
