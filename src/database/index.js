import Sequelize from 'sequelize';
import User from '../app/models/User';
import Plans from '../app/models/Plans';
import Student from '../app/models/Student';
import Matricula from '../app/models/Matricula';
import Checkin from '../app/models/Checkin';
import Help from '../app/models/Help';
import databaseConfig from '../config/database';

const models = [User, Plans, Student, Matricula, Checkin, Help];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
