import Sequelize, { Model } from 'sequelize';

class Help extends Model {
  static init(sequelize) {
    super.init(
      {
        student_id: Sequelize.INTEGER,
        question: Sequelize.STRING,
        answer: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

}
export default Help;
