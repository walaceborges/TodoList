const taskModel = require('../models/taskModel');

const getAll = async() => {
  const tasks = await taskModel.getAll();

  return tasks;
}

module.exports = getAll;