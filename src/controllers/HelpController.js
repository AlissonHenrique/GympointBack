import Help from '../models/Help';

class HelpController {
  async index(req, res) {
    const reponse = await Help.findByPk(req.params.id);
    return res.json({ reponse });
  }

  async store(req, res) {
    const { question } = req.body;
    const response = await Help.create({
      student_id: req.params.id,
      question,
    });

    return res.json(response);
  }
}

export default new HelpController();
