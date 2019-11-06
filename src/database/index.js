import Sequelize from 'sequelize';
import User from '../models/User';
import databaseConfig from '../config/database';
import Plans from '../models/Plans';
import Student from '../models/Student';

const models = [User, Plans, Student];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    // .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
