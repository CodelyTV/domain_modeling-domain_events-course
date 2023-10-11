import { UserEmailChanger } from "../../../../../../src/contexts/shop/users/application/change_email/UserEmailChanger";
import { UserDoesNotExist } from "../../../../../../src/contexts/shop/users/domain/UserDoesNotExist";
import { MockEventBus } from "../../../../shared/infrastructure/MockEventBus";
import { UserEmailMother } from "../../domain/UserEmailMother";
import { UserIdMother } from "../../domain/UserIdMother";
import { UserMother } from "../../domain/UserMother";
import { UserRegisteredDomainEventMother } from "../../domain/UserRegisteredDomainEventMother";
import { MockUserRepository } from "../../infrastructure/MockUserRepository";

describe("UserEmailChanger should", () => {
	const repository = new MockUserRepository();
	const eventBus = new MockEventBus();
	const userEmailChanger = new UserEmailChanger(repository, eventBus);

	it("throw an error if the user does not exist", async () => {
		const userId = UserIdMother.create();
		const email = UserEmailMother.create();

		repository.shouldNotSearch(userId);

		await expect(userEmailChanger.change(userId.value, email.value)).rejects.toThrow(
			new UserDoesNotExist(userId.value),
		);
	});

	it("change the email of an existing user", async () => {
		const existingUser = UserMother.create();
		const newEmail = UserEmailMother.create();

		const userWithNewEmail = UserMother.create({
			...existingUser.toPrimitives(),
			email: newEmail.value,
		});
		const expectedDomainEvent = UserRegisteredDomainEventMother.create(
			userWithNewEmail.toPrimitives(),
		);

		repository.shouldSearch(existingUser);
		repository.shouldSave(userWithNewEmail);
		eventBus.shouldPublish([expectedDomainEvent]);

		await userEmailChanger.change(existingUser.id.value, newEmail.value);
	});
});
