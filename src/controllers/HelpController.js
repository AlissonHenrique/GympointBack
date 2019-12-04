import Help from '../models/Help';
import Student from '../models/Student';

class HelpController {
  async index(req, res) {
    const reponse = await Help.findAll({
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
}

export default new HelpController();
