const { TodoList } = require('../models/models');

class List {
  async create(req, res) {
    let { name, userId } = req.body;
    const todoList = await TodoList.create({ name, userId });
    return res.json(todoList);
  }

  async getAll(req, res) {
    let { limit, page, userId } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let lists;
    if (!userId) return;
    lists = await TodoList.findAll({
      where: { userId },
      limit,
      offset
    });
    return res.json(lists);
  }

  async getOne(req, res) {
    const { id } = req.params;

    const list = await TodoList.findOne({ where: { id } });
    return res.json(list);
  }

  async deleteList(req, res) {
    const { id } = req.params;

    const list = await TodoList.destroy({ where: { id } });
    return res.json(list);
  }
}

module.exports = new List();
