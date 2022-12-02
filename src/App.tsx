import { Header } from "./components/Header/Header";
import { Task } from "./components/Task/Task";

import styles from "./App.module.css";

import './global.css'

function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
      <Task />
    </div>
  )
}

export default App
