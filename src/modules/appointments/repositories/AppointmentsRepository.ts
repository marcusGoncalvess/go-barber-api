import { Repository, EntityRepository } from 'typeorm';

import Appointment from '../infra/typeorm/entities/Appointment';

// Appointment é o model
@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  // Para Ler,buscar,criar ou alterar a entidade apenas
  // esse repositorio deve ser capaz de fazer isso

  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
