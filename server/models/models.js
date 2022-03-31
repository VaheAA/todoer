const sequelize = require('../db/config');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING }
});

const TodoList = sequelize.define('list', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

const Todo = sequelize.define('todo', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING, allowNull: false },
  done: { type: DataTypes.BOOLEAN, allowNull: false }
});

User.hasMany(TodoList);
TodoList.belongsTo(User);

TodoList.hasMany(Todo);
Todo.belongsTo(TodoList);

module.exports = {
  User,
  TodoList,
  Todo
};
