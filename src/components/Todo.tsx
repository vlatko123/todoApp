import React, { ChangeEvent } from 'react';
import '../components/Todo.css';
import {ITask} from '../Interfaces';
import { FcCheckmark } from 'react-icons/fc';
import { GrClose } from 'react-icons/gr';

interface Prop {
    task: ITask;
    removeHandler: (taskNameToDelete: string) => void;
    completedTask: (name: string) => void;
}

export const Todo = ({task, removeHandler, completedTask}: Prop) => {
    return(
        <div className='todoList'>
            <div className='task'>{task.taskName}</div>
            <div className='task'>{task.deadline}</div>
            <button onClick={()=> {completedTask(task.taskName)}}><FcCheckmark /></button>
            <button onClick={() => {removeHandler(task.taskName)}}><GrClose /></button>
        </div>
    )
}