import React from "react";
import Task from './Task'

function TaskList({ onDeleteTask, tasks}) {
  return (
    <div className="tasks">
      {tasks.map(  task=>{
         return<Task onDeleteTask={onDeleteTask}
         key={task.text}
          text={task.text}
           category={task.category}/>})}
    </div>
  );
}

export default TaskList;
