import { DomainEvent } from "../../DomainEvent";

export class UserEmailUpdatedDomainEvent extends DomainEvent {
	static eventName = "user.email.updated";

	constructor(
		public readonly id: string,
		public readonly name: string,
		public readonly email: string,
		public readonly profilePicture: string,
		public readonly status: string,
		occurredOn?: Date,
	) {
		super(UserEmailUpdatedDomainEvent.eventName, occurredOn);
	}

	isExternal(): boolean {
		return true;
	}
}
