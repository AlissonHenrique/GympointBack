import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const studentid = await Student.findByPk(req.params.id);
    if (studentid) {
      return res.json(studentid);
    }

    const reponse = await Student.findAll();
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

  async update(req, res) {
    const user = await Student.findByPk(req.params.id);
    const response = await user.update(req.body);
    return res.json(response);
  }

  async delete(req, res) {
    await Student.destroy({ where: { id: req.params.id } });

    return res.json({ msg: `id deletado com sucesso ` });
  }
}

export default new StudentController();
