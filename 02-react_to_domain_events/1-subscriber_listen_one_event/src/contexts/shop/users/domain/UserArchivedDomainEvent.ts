import { DomainEvent } from "../../../shared/domain/DomainEvent";

export type UserStatusUpdatedDomainEventPrimitives = {
	id: string;
};

export class UserArchivedDomainEvent extends DomainEvent {
	constructor(public readonly id: string) {
		super("user.archived");
	}
}
