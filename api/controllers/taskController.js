const taskService = require('../services/taskService');

const getAll = async(_req, res) => {
  const tasks = await taskService.getAll();

  return res.status(200).json(tasks);
}

module.exports = getAll;