import Sequelize, { Model } from 'sequelize';

class Help extends Model {
  static init(sequelize) {
    super.init(
      {
        question: Sequelize.STRING,
        answer: Sequelize.INTEGER,
        answer_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
  }
}
export default Help;
