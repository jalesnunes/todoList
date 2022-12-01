import { Header } from "./components/Header/Header";
import { Task } from "./components/Task/Task";
import { TaskList } from "./components/TaskList/TaskList";

import './global.css'

function App() {

  return (
    <>
      <Header />
      <Task />
      <TaskList />
    </>
  )
}

export default App
