import { DomainEvent } from "../../../shared/domain/event/DomainEvent";

export class UserRegisteredDomainEvent extends DomainEvent {
	static eventName = "user.registered";

	constructor(
		public readonly id: string,
		public readonly name: string,
		public readonly email: string,
		public readonly profilePicture: string,
		public readonly status: string,
	) {
		super(UserRegisteredDomainEvent.eventName);
	}
}
