import { ClipboardText, Trash } from "phosphor-react";

import styles from "../TaskList/TaskList.module.css";

import checkImg from "../../assets/check.svg";
import checkedImg from "../../assets/checked.svg";

interface TaskListProps {
  content: string;
}

export function TaskList({ content }: TaskListProps) {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <button>
          <img src={checkImg} alt="" />
        </button>
        <p>{content}</p>
        <button className={styles.trash}>
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}
