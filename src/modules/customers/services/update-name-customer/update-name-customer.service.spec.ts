import FakeCustomerRepository from '../../repositories/fakes/fake-customers.repository';
import { UpdateNameCustomerService } from './update-name-customer.service';

describe('UpdateNameCustomerService', () => {
  let service: UpdateNameCustomerService;
  let fakeCustomerRepository: FakeCustomerRepository;

  beforeEach(async () => {
    fakeCustomerRepository = new FakeCustomerRepository();

    service = new UpdateNameCustomerService(
      fakeCustomerRepository
    );
  });

  it("should be able to change name customer", async () => {
    const nameChanged = "Lionan Ferreira";
    const customer = await fakeCustomerRepository.create({
      name: "Lionan Dantas",
      cityId: 1,
      gender: 'Masculino',
      birthDate: new Date('1991-03-30')
    });

    const customerChanged = await service.execute(customer.id, { name: nameChanged });

    expect(customerChanged.name).toBe(nameChanged);
  });

});
