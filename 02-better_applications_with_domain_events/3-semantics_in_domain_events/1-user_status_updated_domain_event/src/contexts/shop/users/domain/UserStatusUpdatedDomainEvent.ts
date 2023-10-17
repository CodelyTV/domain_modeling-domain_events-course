import { DomainEvent } from "../../../shared/domain/DomainEvent";

export type UserStatusUpdatedDomainEventPrimitives = {
	id: string;
	status: string;
};

export class UserStatusUpdatedDomainEvent extends DomainEvent {
	constructor(
		private readonly id: string,
		private readonly status: string,
	) {
		super();
	}
}
