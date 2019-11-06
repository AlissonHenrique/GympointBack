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

  async delete(req, res) {
    const plan = await Plans.findByPk(req.params.id);
    if (plan.id !== req.userId) {
      return res.status(401).json({
        error: 'Voce não tem premição ',
      });
    }

    return res.json(plan);
  }
}

export default new PlansController();
