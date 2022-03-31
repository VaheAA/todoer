const { Todo } = require('../models/models');

class TodoItem {
  async create(req, res) {
    let { text, done, listId } = req.body;
    const todo = await Todo.create({ text, done, listId });
    return res.json(todo);
  }

  async getAll(req, res) {
    let { limit, page, listId } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let todos;
    if (!listId) return;
    todos = await Todo.findAndCountAll({
      where: { listId },
      limit,
      offset
    });
    return res.json(todos);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const todo = await Todo.findOne({
      where: { id }
    });
    return res.json(todo);
  }
}

module.exports = new TodoItem();
