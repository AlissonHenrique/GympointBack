import * as Yup from 'yup';
import User from '../models/User';

class UserControler {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const userExist = await User.findOne({ where: { email: req.body.email } });
    if (userExist) {
      return res.status(400).json({ error: 'usuário já existe' });
    }
    const user = await User.create(req.body);

    return res.json(user);
  }
}

export default new UserControler();
