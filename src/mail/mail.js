import nodemailer from 'nodemailer';
import exphbs from 'express-handlebars';
import nodemailerhbs from 'nodemailer-express-handlebars';
import { resolve } from 'path';
import mailerConfig from '../config/mail';

class Mail {
  constructor() {
    const { houst, port, secure } = mailerConfig;
    this.transporter = nodemailer.createTransport({
      houst,
      port,
      secure,
    });
    this.configureTemplates();
  }

  configureTemplates() {
    const viewpath = resolve(__dirname, '..', 'mail', 'emails');
    this.transporter.use(
      'compile',
      nodemailerhbs({
        viewEngine: exphbs.create({
          layoutsDir: resolve(viewpath, 'layouts'),
          partialsDir: resolve(viewpath, 'partials'),
          defaultLayout: 'default',
          extname: '.hbs',
        }),
        viewpath,
        extName: '.hbs',
      })
    );
  }

  sendMail(message) {
    return this.transporter.sendMail({
      ...mailerConfig.default,
      ...message,
    });
  }
}

export default new Mail();
