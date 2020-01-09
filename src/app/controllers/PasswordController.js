import crypto from 'crypto';
import User from '../models/User';
import Mail from '../../mail/mail';
// /ForgetPassword
class PasswordController {
  async store(req, res) {
    try {
      const { email } = req.body;
      const es = await User.findOne({
        where: { email: req.body.email },
      });

      if (!es) {
        res.status(401).send({ error: 'email not existe' });
      }

      const now = new Date();
      const token = crypto.randomBytes(20).toString('hex');
      now.setHours(now.getHours() + 1);

      const user = await User.findByPk(req.userId);

      await user.update({
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
      return res.send();
    } catch (err) {
      console.log(err);
      res.status(400).send({ error: 'Erro forgot password' });
    }
    return res.send(); //
  }

  async update(req, res) { }
}

export default new PasswordController();
