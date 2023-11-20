import { WelcomeEmailSender } from "../../../../retention/email/application/send_welcome_email/WelcomeEmailSender";
import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";

export class UserRegistrar {
	constructor(
		private readonly repository: UserRepository,
		private readonly emailSender: WelcomeEmailSender,
	) {}

	async registrar(id: string, name: string, email: string, profilePicture: string): Promise<void> {
		const user = User.create(id, name, email, profilePicture);

		await this.repository.save(user);
		await this.emailSender.send(id, name, email);
	}
}
