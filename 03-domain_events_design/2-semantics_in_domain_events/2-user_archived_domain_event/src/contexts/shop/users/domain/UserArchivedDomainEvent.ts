import { DomainEvent } from "../../../shared/domain/DomainEvent";

export type UserStatusUpdatedDomainEventPrimitives = {
	id: string;
};

export class UserArchivedDomainEvent extends DomainEvent {
	constructor(private readonly id: string) {
		super();
	}
}
