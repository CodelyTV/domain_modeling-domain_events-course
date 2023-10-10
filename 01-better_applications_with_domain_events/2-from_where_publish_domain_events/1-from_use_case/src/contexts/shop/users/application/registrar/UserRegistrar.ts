import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";

export class UserRegistrar {
	constructor(private readonly repository: UserRepository) {}

	async create(id: string, name: string, email: string, profilePicture: string): Promise<void> {
		const product = User.create(id, name, email, profilePicture);

		await this.repository.save(product);
	}
}
