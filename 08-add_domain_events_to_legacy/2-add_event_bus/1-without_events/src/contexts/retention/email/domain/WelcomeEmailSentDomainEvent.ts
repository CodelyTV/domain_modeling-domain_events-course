import { DomainEvent } from "../../../shared/domain/event/DomainEvent";

export class WelcomeEmailSentDomainEvent extends DomainEvent {
	constructor(
		public readonly id: string,
		public readonly userId: string,
		public readonly userName: string,
		public readonly fromEmailAddress: string,
		public readonly toEmailAddress: string,
		public readonly emailBody: string,
	) {
		super("welcome_email.sent");
	}
}
