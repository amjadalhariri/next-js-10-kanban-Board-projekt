const fs = require("fs");

let tasks = require("data/tasks.json");

export const tasksRepo = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

function getAll() {
  return tasks;
}

function getById(id) {
  return tasks.find((x) => x.id.toString() === id.toString());
}

function create({
  type,
  style,
  avatar,
  priority,
  user,
  text,
  comments,
  attach,
}) {
  const task = { type,avatar, style, priority, user, text, comments, attach };

  // generate new task id
  task.id = tasks.length ? Math.max(...tasks.map((x) => x.id)) + 1 : 1;

  // set date created and updated
  task.dateCreated = new Date().toISOString();
  task.dateUpdated = new Date().toISOString();

  // add and save task
  tasks.push(task);
  saveData();
}
function update(id, { type,style,avatar, priority, user, text, comments, attach }) {
  const params = { type,style,avatar, priority, user, text, comments, attach };
  const task = tasks.find((x) => x.id.toString() === id.toString());


  // set date updated
  task.dateUpdated = new Date().toISOString();

  // update and save
  Object.assign(task, params);
  saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
  // filter out deleted user and save
  tasks = tasks.filter((x) => x.id.toString() !== id.toString());
  saveData();
}



function saveData() {
  fs.writeFileSync("data/tasks.json", JSON.stringify(tasks, null, 4));
}
