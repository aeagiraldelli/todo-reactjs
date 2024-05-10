import { useState } from 'react'
import { Task } from './TaskItem'

import styles from './TaskList.module.css'

interface TaskListProps {
  tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps) {
  const [userTasks, setUserTasks] = useState(tasks)
  const [totalTasksDone, setTotalTaskDone] = useState(0)

  return (
    <>
      <div className={styles.header}>
        <div className={styles.flexRow}>
          <p className={styles.tasksCreated}>Tarefas criadas</p><span className={styles.badge}>{userTasks.length}</span>
        </div>
        <div className={styles.flexRow}>
          <p className={styles.tasksDone}>Concluídas</p><span className={styles.badge}>{totalTasksDone} de {userTasks.length}</span>
        </div>
      </div>
    </>
  )
}