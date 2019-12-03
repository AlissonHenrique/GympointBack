// import { startOfToday, parseISO, isBefore } from 'date-fns';
import Matricula from '../models/Matricula';
import Student from '../models/Student';

class MatriculaController {
  async index(req, res) {
    // const reponse = await Matricula.findByPk(req.params.id);
    // if (reponse) {
    //   return res.json(reponse);
    // }
    const repo = await Matricula.findAll({
      include: [
        {
          model: Student,
          as: 'student',
        },
      ],
    });

    return res.json(repo);
  }

  async store(req, res) {
    // const { start_date } = req.body;

    // const startMes = startOfToday(parseISO(start_date));
    // if (isBefore(startMes, new Date())) {
    //   return res.status(400).json({ error: 'Esta data não é permitida' });
    // }
    const response = await Matricula.create(req.body);
    return res.json(response);
  }

  async delete(req, res) {
    const mat = await Matricula.findByPk(req.params.id);
    if (mat.id !== req.userId) {
      return res.status(401).json({
        error: 'Voce não tem permição ',
      });
    }

    return res.json(mat);
  }
}

export default new MatriculaController();
