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

  async update(req, res) {}

  async delete(req, res) {
    await Plans.destroy({ where: { id: req.params.id } });

    return res.json({ msg: `id deletado com sucesso ` });
  }
}

export default new PlansController();
