import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import mailConfig from '../config/mail';

class MatriculaMail {
  async handle({ data }) {
    const { appointment } = data;

    await mailConfig.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Agendamento cancelado',
      template: 'cancellation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: format(
          parseISO(appointment.date),
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
      },
    });
  }
}
export default new MatriculaMail();
