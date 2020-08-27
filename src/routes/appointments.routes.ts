import { Router } from 'express';
import { v4 as uuid } from 'uuid';

import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointment';
// parseISO irá converter uma data em formato de string para
// o formato Date() do JS

// startOfHour vai pegar uma data e colocar o minuto,seg,miliseg como 0

const appointmentsRouter = Router();

const appointments: Appointment[] = [];

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointments.find(appointment =>
    isEqual(parsedDate, appointment.date),
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  const appointment = {
    id: uuid(),
    provider,
    date: parsedDate,
  };

  appointments.push(appointment);

  return response.json(appointment);
});

export default appointmentsRouter;
