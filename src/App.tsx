import { FC, useState, ChangeEvent } from "react";
import "./App.css";
import { Tasks } from "./components/Tasks";
import { Todo } from "./components/Todo";
import { ITask } from "../src/Interfaces";
import { CompletedTask } from "../src/components/CompletedTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);
  const [complete, setComplete] = useState<ITask[]>([]);

  const taskHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const showHandler = () => {
    const newTask = { taskName: task, deadline: deadline };
    setTodo([...todo, newTask]);
    setTask("");
    setDeadline(0);
  };

  const removeHandler = (taskNameToDelete: string | any): void => {
    setTodo(
      todo.filter((itemName) => {
        return itemName.taskName !== taskNameToDelete;
      })
    );
  };

  const completedTask = (name: string) => {
    let completedTask = todo.filter((item) => item.taskName === name)
    setComplete(complete.concat(completedTask))
    let removeTask = todo.filter((item) => item.taskName !== name)
    setTodo(removeTask)

  };

  const refreshListHandler = () => {
    if(complete.length > 0){
      setComplete([])
    }else{
      alert("There is no completed task")
    }
  }

  return (
    <div className="app">
      <div className="header">
        <Tasks
          taskHandler={taskHandler}
          showHandler={showHandler}
          task={task}
          deadline={deadline}
        />
      </div>
      <div className="refreshBtn">
      <button onClick = {refreshListHandler}>Refresh</button>
      </div>
      <div className="todo">
        <div className="todoContainer">
          {todo.length === 0 ? <p>Empty todo list...</p> : todo.map((task: ITask, index: number) => {
            return (
              <Todo
                key={index}
                task={task}
                removeHandler={removeHandler}
                completedTask={completedTask}
              />
            );
          })}
        </div>
        <div className="completedTask">
          {complete.length === 0 ? <p>Still no completed task...</p> : complete.map((item: ITask, index: number) => {
            return <CompletedTask key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
