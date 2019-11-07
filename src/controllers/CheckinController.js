import { formatDistance, parseISO } from 'date-fns';
import Checkin from '../models/Checkin';

class CheckinController {
  async index(req, res) {
    // const chekinQuantida = await Checkin.findAll({
    //   where: { student_id: req.params.id },
    //   attributes: ['createdAt'],
    // });
    const firstDate = parseISO('2019-11-01T20:55:41.357Z');
    const lastDate = new Date();
    const distance = formatDistance(firstDate, lastDate);

    return res.json(distance);
  }

  async store(req, res) {
    const verificaChekin = await Checkin.findAll({
      where: { student_id: req.params.id },
      attributes: ['createdAt'],
    });

    if (verificaChekin.length === 2) {
      return res.status(401).json({ error: 'Você não pode criar mais' });
    }

    const response = await Checkin.create({
      student_id: req.params.id,
    });

    return res.json(response);
  }
}

export default new CheckinController();
