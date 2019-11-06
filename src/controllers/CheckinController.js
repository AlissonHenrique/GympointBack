import Checkin from '../models/Checkin';

class CheckinController {
  async index(req, res) {
    const reponse = await Checkin.findAll();
    return res.json(reponse);
  }

  async store(req, res) {
    const response = await Checkin.create(req.body);
    return res.json(response);
  }
}

export default new CheckinController();
