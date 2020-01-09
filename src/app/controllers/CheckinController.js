import Checkin from '../models/Checkin';

class CheckinController {
  async index(req, res) {
    const chekinQuantida = await Checkin.findAll({
      where: { student_id: req.params.id },
      attributes: ['createdAt'],
    });

    return res.json(chekinQuantida);
  }

  async store(req, res) {
    const verificaChekin = await Checkin.findAll({
      where: { student_id: req.params.id },
      attributes: ['createdAt'],
    });

    if (verificaChekin.length === 5) {
      return res.status(401).json({ error: 'Você não pode criar mais' });
    }

    const response = await Checkin.create({
      student_id: req.params.id,
    });

    return res.json(response);
  }
}

export default new CheckinController();
