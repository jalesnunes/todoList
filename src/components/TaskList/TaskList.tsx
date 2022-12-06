import { ClipboardText, Trash } from "phosphor-react";

import styles from "../TaskList/TaskList.module.css";

import checkImg from "../../assets/check.svg";
import checkedImg from "../../assets/checked.svg";

interface TaskListProps {
  content: string;
  isComplete: boolean;
  id: string;
  onDeleteTask: (task: string) => void;
  onCompleteTask: (id: string) => void;
}

export function TaskList({ content, isComplete, id, onDeleteTask, onCompleteTask }: TaskListProps) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleCompleteTask() {
    onCompleteTask(id)
  }

  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <button onClick={handleCompleteTask}>
          {!isComplete ? (
            <img src={checkImg} alt="" />
          ) : (
            <img src={checkedImg} alt="" />
          )}
        </button>
        <p className={!isComplete ? styles.taskNotComplete : styles.taskComplete}>
          {content}
        </p>
        <button className={styles.trash}>
          <Trash size={24} onClick={handleDeleteTask} />
        </button>
      </div>
    </div>
  );
}
