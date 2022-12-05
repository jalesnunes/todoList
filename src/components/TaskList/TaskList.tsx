import { ClipboardText, Trash } from "phosphor-react";

import styles from "../TaskList/TaskList.module.css";

import checkImg from "../../assets/check.svg";
import checkedImg from "../../assets/checked.svg";

interface TaskListProps {
  content: string;
  onDeleteTask: (task: string) => void
}

export function TaskList({ content, onDeleteTask }: TaskListProps) {

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <button>
          <img src={checkImg} alt="" />
        </button>
        <p>{content}</p>
        <button className={styles.trash}>
          <Trash 
            size={24}
            onClick={handleDeleteTask} 
          />
        </button>
      </div>
    </div>
  );
}
