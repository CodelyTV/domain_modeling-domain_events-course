import { UserArchivedDomainEvent } from "../../../../../src/contexts/shop/users/domain/UserArchivedDomainEvent";
import { UserIdMother } from "./UserIdMother";

export class UserArchivedDomainEventMother {
	static create(id?: string): UserArchivedDomainEvent {
		return new UserArchivedDomainEvent(id ?? UserIdMother.create().value);
	}
}
