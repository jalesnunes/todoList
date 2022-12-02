import { ChangeEvent, FormEvent, useState } from "react";

import { ClipboardText, PlusCircle } from "phosphor-react";
import styles from "./Task.module.css";
import { TaskList } from "../TaskList/TaskList";

export function Task() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTask]);

    setNewTask("");
  }

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  return (
    <div>
      <div className={styles.form}>
        <form onSubmit={handleCreateNewTask}>
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={handleNewTask}
          />
          <button type="submit">
            Add
            <PlusCircle size={20} />
          </button>
        </form>
      </div>

      <div className={styles.content}>
        <header>
          <div className={styles.created}>
            <strong>Tasks created</strong>
            <span>{tasks.length}</span>
          </div>

          <div className={styles.completed}>
            <strong>Completed</strong>
            <span>0 of {tasks.length}</span>
          </div>
        </header>

        {tasks.length === 0 ? (
          <>
            <span className={styles.line}></span>
            <div className={styles.empty}>
              <ClipboardText size={56} />
              <strong>You don't have tasks registered yet</strong>
              <p>Create tasks and organize your to-do items</p>
            </div>
          </>
        ) : (
          tasks.map((task) => {
            return <TaskList content={task} />;
          })
        )}
      </div>
    </div>
  );
}
