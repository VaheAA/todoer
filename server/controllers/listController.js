const { TodoList } = require('../models/models');

class List {
  async create(req, res) {
    let { name } = req.body;
    const todoList = await TodoList.create({ name });
    return res.json(todoList);
  }

  async getAll(req, res) {
    const lists = await TodoList.findAll();
    return res.json(lists);
  }

  async getOne(req, res) {
    const { id } = req.params;

    const list = await TodoList.findOne({ where: { id } });
    return res.json(list);
  }
}

module.exports = new List();
