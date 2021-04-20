import FakeCustomerRepository from '../../repositories/fakes/fake-customers.repository';
import { FindByNameService } from './find-by-name.service';

describe('FindByNameService', () => {
  let service: FindByNameService;
  let fakeCustomerRepository: FakeCustomerRepository;

  beforeEach(async () => {
    fakeCustomerRepository = new FakeCustomerRepository();

    service = new FindByNameService(
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

    const customerFind = await service.execute({ name: customer.name });

    expect(customerFind.name).toBe("Lionan Dantas");
  });
});
