import { EventBus } from "../../../../../../src/contexts/shared/domain/EventBus";
import { UserRegistrar } from "../../../../../../src/contexts/shop/users/application/registrar/UserRegistrar";
import { UserMother } from "../../domain/UserMother";
import { UserRegisteredDomainEventMother } from "../../domain/UserRegisteredDomainEventMother";
import { MockUserRepository } from "../../infrastructure/MockUserRepository";

describe("UserRegistrar should", () => {
	const repository = new MockUserRepository();
	const userRegistrar = new UserRegistrar(repository);

	const mockPublishInEventBus = jest.fn();
	EventBus.publish = mockPublishInEventBus.mockReturnValue(null);

	it("register a valid user", async () => {
		const expectedUser = UserMother.create();
		const expectedUserPrimitives = expectedUser.toPrimitives();

		const expectedDomainEvent = UserRegisteredDomainEventMother.create(expectedUserPrimitives);

		repository.shouldSave(expectedUser);
		expect(mockPublishInEventBus).toHaveBeenCalledWith([expectedDomainEvent]);

		await userRegistrar.registrar(
			expectedUserPrimitives.id,
			expectedUserPrimitives.name,
			expectedUserPrimitives.email,
			expectedUserPrimitives.profilePicture,
		);
	});
});
