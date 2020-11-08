import { Repository, EntityRepository } from 'typeorm';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

import Appointment from '../entities/Appointment';

// Appointment é o model
@EntityRepository(Appointment)
class AppointmentsRepository
  extends Repository<Appointment>
  implements IAppointmentsRepository {
  // Para Ler,buscar,criar ou alterar a entidade apenas
  // esse repositorio deve ser capaz de fazer isso

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment;
  }
}

export default AppointmentsRepository;
