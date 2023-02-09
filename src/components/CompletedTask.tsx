import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  item: ITask;
}

export const CompletedTask = ({ item }: Props) => {
  return (
    <div className="cTask">
      <div className="task">{item.taskName}</div>
      <div className="task">{item.deadline}</div>
    </div>
  );
};
