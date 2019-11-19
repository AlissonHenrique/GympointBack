import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        peso: Sequelize.INTEGER,
        altura: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );
  }
}
export default Student;