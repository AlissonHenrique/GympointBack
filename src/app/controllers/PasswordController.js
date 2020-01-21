import crypto from 'crypto';
import User from '../models/User';
import Mail from '../../mail/mail';
// /ForgetPassword
class PasswordController {
  async store(req, res) {
    try {
      const { email } = req.body;
      const emailExist = await User.findOne({
        where: { email: req.body.email },
        attributes: ['id', 'email'],
      });

      if (!emailExist) {
        res.status(401).send({ error: 'email not existe' });
      }

      const now = new Date();
      const token = crypto.randomBytes(20).toString('hex');
      now.setHours(now.getHours() + 1);

      const user = await User.findByPk(emailExist.id);

      const update = await user.update({
        password_reset_token: token,
        password_reset_expires: now,
      });

      await Mail.sendMail(
        {
          to: email,
          subject: 'teste',
          template: 'forgetpassword',
          context: {
            token,
            url: `${process.env.APP_URL}`,
          },
        },
        err => {
          if (err) {
            res
              .status(400)
              .send({ error: 'Cannot send forget password email' });
          }
          return res.send();
        }
      );
      return res.json(update);
    } catch (err) {
      res.status(400).send({ error: 'Erro forgot password' });
    }
  }

  async update(req, res) {
    const { password, confirmpassword } = req.body;
    const { token } = req.query;

    const user = await User.findOne({
      where: { email: req.body.email },
    });

    if (!user) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    if (password !== confirmpassword)
      return res.status(400).send({ error: 'Password is different' });

    if (token !== user.password_reset_token)
      return res.status(400).send({ error: 'Token invalid' });
    const now = new Date();

    if (now > user.password_reset_expires)
      return res.status(400).send({ error: 'token expirado' });

    user.password = password;
    await user.update({
      password,
    });

    return res.json(user);
  }
}

export default new PasswordController();
