import Help from '../models/Help';

class HelpController {
  async index(req, res) {
    if (req.params.id) {
      const reponse = await Help.findAll({ where: { id: req.userId } });
      return res.json(reponse);
    }
    const reponse = await Help.findAll({
      where: {
        answer_at: false,
      },
    });

    return res.json(reponse);
  }

  async store(req, res) {
    const response = await Help.create(req.body);
    return res.json(response);
  }
}

export default new HelpController();
