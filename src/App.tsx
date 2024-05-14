import { Header } from './components/Header'

import styles from './App.module.css'
import { InputBar } from './components/InputBar'
import { TaskList } from './components/TaskList'
import { Task } from './components/TaskItem'
import { useState } from 'react'

export function App() {
  const [tasks, setTasks] = useState(Array<Task>);

  function onAddTaskDescription(description: string) {
    const t: Task = {
      id: tasks.length + 1,
      description: description,
      isDone: false
    }
    setTasks([t, ...tasks])
  }

  function handleOnTaskCompletedChanged(task: Task) {
    const newTaskList = tasks.map(t => {
      if (t.id == task.id) {
        t.isDone = task.isDone
      }

      return t
    })
    setTasks([...newTaskList])
  }

  function handleOnTaskDeleted(task: Task) {
    const filteredTasks = tasks.filter(t => t.id !== task.id)
    setTasks([...filteredTasks])
  }

  return (
    <>
      <Header />
      <div className={styles.app}>
        <InputBar
          onInputTask={onAddTaskDescription}
          placeholder='Adicione uma nova tarefa'
          required
          minLength={3}
        />
        <TaskList tasks={tasks}
          onTaskCompletedChanged={handleOnTaskCompletedChanged}
          onTaskDeleted={handleOnTaskDeleted} />
      </div>
    </>
  )
}