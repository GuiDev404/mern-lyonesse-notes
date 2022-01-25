import React from "react";
import Task from "./Task";

const ListOfTasks = ({ tasks, ...props }) => {
  return tasks.map((task) => (
    <Task
      key={task._id}
      id={task._id}
      title={task.name}
      description={task.description}
      createdAt={task.createdAt}
      isFav={task.isFav}
      {...props}
    />
  ));
};

export default ListOfTasks;
