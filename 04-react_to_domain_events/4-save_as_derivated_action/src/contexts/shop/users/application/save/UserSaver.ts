import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";

export class UserSaver {
	constructor(private readonly repository: UserRepository) {}

	async save(
		id: string,
		name: string,
		email: string,
		profilePicture: string,
		status: string,
	): Promise<void> {
		const user = User.fromPrimitives({
			id,
			name,
			email,
			profilePicture,
			status,
		});

		await this.repository.save(user);
	}
}
