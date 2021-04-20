import FakeCustomerRepository from '../../repositories/fakes/fake-customers.repository';
import { RemoveCustomerService } from './remove-customer.service';

describe('RemoveCustomerService', () => {
  let service: RemoveCustomerService;
  let fakeCustomerRepository: FakeCustomerRepository;

  beforeEach(async () => {
    fakeCustomerRepository = new FakeCustomerRepository();

    service = new RemoveCustomerService(
      fakeCustomerRepository
    );
  });

  it('should be delete um customer register', async () => {
    const name = "Lionan Dantas";
    const customer = await fakeCustomerRepository.create({
      name: name,
      city_id: 1,
      gender: 'Masculino',
      birthDate: new Date('1991-03-30')
    });

    await service.execute(customer.id)

    const customerFind = await fakeCustomerRepository.findByName(name);

    expect(customerFind).toBeNull();
  });
});
