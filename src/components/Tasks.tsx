import {FC} from "react";
import "../components/Tasks.css";

export const Tasks: FC<any> = ({taskHandler, showHandler, task, deadline}) => {
return(
    <div className="entries">
        <div className="inputContainer">
        <input value = {task} type="text" placeholder="Enter your task" name="task" onChange={taskHandler}/>
        <input value={deadline} type="number" placeholder="Enter your deadline" name="deadline" onChange={taskHandler}/>
        </div>
        <div className="btnContainer">
        <button onClick={showHandler}>Add</button>
        </div>
    </div>
)
}