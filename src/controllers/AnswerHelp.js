import Help from '../models/Hselp';

class AnswerHelp {
  async index(req, res) {
    const response = await Help.findAll({
      where: {
        answer: null,
      },
    });
    return res.json(response);
  }

  async store(req, res) {}
}
export default new AnswerHelp();
