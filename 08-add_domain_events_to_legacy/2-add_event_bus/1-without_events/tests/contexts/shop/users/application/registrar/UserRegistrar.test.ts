import { WelcomeEmailSender } from "../../../../../../src/contexts/retention/email/application/send_welcome_email/WelcomeEmailSender";
import { UserRegistrar } from "../../../../../../src/contexts/shop/users/application/registrar/UserRegistrar";
import { WelcomeEmailMother } from "../../../../retention/email/domain/WelcomeEmailMother";
import { MockEmailSender } from "../../../../retention/email/infrastructure/MockEmailSender";
import { MockUuidGenerator } from "../../../../shared/infrastructure/MockUuidGenerator";
import { UserMother } from "../../domain/UserMother";
import { MockUserRepository } from "../../infrastructure/MockUserRepository";

describe("UserRegistrar should", () => {
	const repository = new MockUserRepository();

	const uuidGenerator = new MockUuidGenerator();
	const emailSender = new MockEmailSender();

	const userRegistrar = new UserRegistrar(
		repository,
		new WelcomeEmailSender(uuidGenerator, emailSender),
	);

	it("register a valid user", async () => {
		const expectedUser = UserMother.create();
		const expectedUserPrimitives = expectedUser.toPrimitives();

		const email = WelcomeEmailMother.create({
			userId: expectedUserPrimitives.id,
			userName: expectedUserPrimitives.name,
			from: "soporte@codely.com",
			to: expectedUserPrimitives.email,
			body: `
		¡Enhorabuena por el registro, ${expectedUserPrimitives.name}!
		
		Completa tu perfil para finalizar: https://codely.com/user/${expectedUserPrimitives.id}.
		`,
		});

		repository.shouldSave(expectedUser);
		uuidGenerator.shouldGenerate(email.toPrimitives().id);
		emailSender.shouldSend(email);

		await userRegistrar.registrar(
			expectedUserPrimitives.id,
			expectedUserPrimitives.name,
			expectedUserPrimitives.email,
			expectedUserPrimitives.profilePicture,
		);
	});
});
