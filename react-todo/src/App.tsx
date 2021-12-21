import React, { MutableRefObject, useRef, useState } from "react";
import Task from "./Task";
import { TaskType } from "./types";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const ref = useRef(null);

  const addTask = (ref: MutableRefObject<any>) => {
    if (!ref.current.value) return;
    const newTask: TaskType = {
      id: tasks.length > 0 ? tasks[tasks.length -1].id + 1 : 0,
      text: ref.current.value,
      done: false,
    };
    setTasks([...tasks, newTask]);
    ref.current.value = "";
  };

  return (
    <>
      <h1>react todo</h1>
      <hr />
      <input type="text" placeholder="タスク入力" ref={ref} />
      <button onClick={() => addTask(ref)}>追加</button>
      <ul>
        {tasks.map((task,i) => {
          if (task.done) return null
          const props = {
            ...task,
            setTasks: setTasks,
            tasks: tasks,
          };
          return <Task {...props} key={i} />;
        })}
      </ul>
    </>
  );
}

export default App;
