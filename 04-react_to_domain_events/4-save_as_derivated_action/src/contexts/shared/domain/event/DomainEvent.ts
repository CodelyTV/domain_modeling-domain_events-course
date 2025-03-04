export class DomainEvent {
	public readonly occurredOn: Date;

	protected constructor(
		public readonly eventName: string,
		occurredOn?: Date,
	) {
		this.occurredOn = occurredOn ?? new Date();
	}
}
