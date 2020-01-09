import Help from '../models/Help';
import Student from '../models/Student';

class HelpController {
  async index(req, res) {

    const help = await Help.findByPk(req.params.id)

    if (help) {
      return res.json(help);
    }

    const reponse = await Help.findAll({
      where: { answer: null },
      include: [{
        model: Student,
        as: 'student',
        attributes: ['nome']
      }]
    });
    return res.json(reponse);
  }

  async store(req, res) {
    const { question } = req.body;
    const response = await Help.create({
      student_id: req.params.id,
      question,
    });

    return res.json(response);
  }


  async update(req, res) {
    const { answer } = req.body
    const pl = await Help.findByPk(req.params.id);
    const response = await pl.update({
      answer,
      answer_at: new Date()
    });
    return res.json(response);
  }


}

export default new HelpController();
