import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const reponse = await Student.findAll({
      attributes: ['id', 'nome', 'email', 'peso', 'idade', 'altura'],
    });
    return res.json(reponse);
  }

  async store(req, res) {
    const studentExist = await Student.findOne({
      where: { email: req.body.email },
    });
    if (studentExist) {
      return res.status(400).json({ error: 'usuário já existe' });
    }

    const { id, nome, email, peso, idade, altura } = await Student.create(
      req.body
    );
    return res.json({ id, nome, email, peso, idade, altura });
  }

  async delete(req, res) {
    const study = await Student.findByPk(req.params.id);
    if (study.id !== req.userId) {
      return res.status(401).json({
        error: 'Voce não tem premição ',
      });
    }

    return res.json(study);
  }
}

export default new StudentController();
