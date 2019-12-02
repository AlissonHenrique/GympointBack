import Plans from '../models/Plans';

class PlansController {
  async index(req, res) {
    const planid = await Plans.findByPk(req.params.id);
    if (planid) {
      return res.json({ planid });
    }
    const reponse = await Plans.findAll({});
    return res.json({ reponse });
  }

  async store(req, res) {
    const response = await Plans.create(req.body);
    return res.json(response);
  }

  async update(req, res) {
    const pl = await Plans.findByPk(req.params.id);
    const response = await pl.update(req.body);
    return res.json({ response });
  }

  async delete(req, res) {
    await Plans.destroy({ where: { id: req.params.id } });

    return res.json({ msg: `id deletado com sucesso ` });
  }
}

export default new PlansController();
