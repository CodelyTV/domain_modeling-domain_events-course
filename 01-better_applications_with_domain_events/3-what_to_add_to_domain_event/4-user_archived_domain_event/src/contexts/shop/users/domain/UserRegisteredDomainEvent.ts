import { DomainEvent } from "../../../shared/domain/DomainEvent";

export class UserRegisteredDomainEvent extends DomainEvent {
	constructor(
		private readonly id: string,
		private readonly name: string,
		private readonly email: string,
		private readonly profilePicture: string,
		private readonly status: string,
	) {
		super();
	}
}
