import { BusinessException } from 'src/shared';
import FakeCustomerRepository from '../../repositories/fakes/fake-customers.repository';
import { CreateCustomerService } from './create-customer.service';

describe('CreateCustomerService', () => {
  let service: CreateCustomerService;
  let fakeCustomerRepository: FakeCustomerRepository;

  beforeEach(async () => {
    fakeCustomerRepository = new FakeCustomerRepository();

    service = new CreateCustomerService(
      fakeCustomerRepository
    );
  });

  it("should be able to create a new customer", async () => {

    const customer = await service.execute({
      name: "Lionan Dantas",
      cityId: 1,
      gender: 'Masculino',
      birthDate: new Date('1991-03-30')
    });

    expect(customer).toHaveProperty("id");
  });

  it("should not be able to create two customer with the same name", async () => {
    await service.execute({
      name: "Lionan Dantas",
      cityId: 1,
      gender: 'Masculino',
      birthDate: new Date('1991-03-30')
    });

    await expect(
      service.execute({
        name: "Lionan Dantas",
        cityId: 1,
        gender: 'Masculino',
        birthDate: new Date('1991-03-30')
      }),
    ).rejects.toBeInstanceOf(BusinessException);
  });

});

