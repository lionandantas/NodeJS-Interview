import FakeCustomerRepository from '../../repositories/fakes/fake-customers.repository';
import { FindByIdService } from './find-by-id.service';

describe('FindByIdService', () => {
  let service: FindByIdService;
  let fakeCustomerRepository: FakeCustomerRepository;
  beforeEach(async () => {
    fakeCustomerRepository = new FakeCustomerRepository();

    service = new FindByIdService(
      fakeCustomerRepository
    );
  });

  it("should be able to show the customer", async () => {
    const customer = await fakeCustomerRepository.create({
      name: "Lionan Dantas",
      city_id: 1,
      gender: 'Masculino',
      birthDate: new Date('1991-03-30')
    });

    const customerFind = await service.execute(customer.id);

    expect(customerFind.name).toBe("Lionan Dantas");
  });
});
