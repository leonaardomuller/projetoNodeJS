import Appointment from '../models/Appointment'

/**
 * [x] Recebimento das informações
 * [/] Tratativa de erros/excessões
 * [] Acesso ao repositório
 */
interface Request {
  provider: string;
  date: Date;
}

/**
 * Dependency Inversion
 */

class CreateAppointmentService {
  constructor() {

  }

  public execute({date, provider}: Request): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = appointmentsRepository.findByDate(
      parsedDate,
    )

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked')
    }

    const appointment = appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;