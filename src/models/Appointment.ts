import { v4 as uuid } from 'uuid';

class Appointment {
  id: string;

  provider: string;

  date: Date;

  // pegando a interface do proprio objeto mas omitindo o id
  // isso porque o id não vem como parametro
  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
