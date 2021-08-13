//import { normalizedTasks } from "../pages/api/data";


import { ADD_TASK, DELETE_TASK, DRAG_AND_DROP } from "../constants";
import { taskService } from "services";
import { async } from "rxjs";


 let normalizedTasks = require("../data/tasks.json");


export default (tasks = normalizedTasks, action) => {
  const { type, payload, randomId } = action;

  switch (type) {
    case DELETE_TASK:
      return tasks.filter((task) => task.id !== payload.id);

    case ADD_TASK:
      return tasks.concat({
        ...payload.task,
        id: randomId,
      });

    case DRAG_AND_DROP:
      let id = payload.ev.dataTransfer.getData("text/html");
      let filteredTasks = tasks.filter((task) => {
        if (task.id === id) {
          task.type = payload.cat;
          // update(task.type);
        }
        return task;
      });
      return (tasks = filteredTasks);

    default:
      return tasks;
  }
};
  // async function update(type) {
  //    taskService.update(type).then(() => {console.log(type)});
  //  }