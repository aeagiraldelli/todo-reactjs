import { Header } from './components/Header'

import styles from './App.module.css'
import { InputBar } from './components/InputBar'
import { TaskList } from './components/TaskList'
import { Task } from './components/TaskItem'

const tasks: Task[] = []

export function App() {
  return (
    <>
      <Header />
      <div className={styles.app}>
        <InputBar
          placeholder='Adicione uma nova tarefa'
          required
          minLength={3}
        />
        <TaskList tasks={tasks} />
      </div>
    </>
  )
}