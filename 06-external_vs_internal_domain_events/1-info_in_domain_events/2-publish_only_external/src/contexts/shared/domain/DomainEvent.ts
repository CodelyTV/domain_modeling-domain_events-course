export abstract class DomainEvent {
	static eventName = "domain_event";
	public readonly occurredOn: Date;

	protected constructor(
		public readonly eventName: string,
		occurredOn?: Date,
	) {
		this.occurredOn = occurredOn ?? new Date();
	}

	abstract isExternal(): boolean;
}
