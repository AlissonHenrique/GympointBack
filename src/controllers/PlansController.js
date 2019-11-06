import Plans from '../models/Plans';

class PlansController {
  async index(req, res) {
    const reponse = await Plans.findAll({
      attributes: ['id', 'title', 'duration', 'price'],
    });
    return res.json(reponse);
  }

  async store(req, res) {
    const response = await Plans.create(req.body);
    return res.json(response);
  }
}

export default new PlansController();
