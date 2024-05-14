import { Task, TaskItem } from './TaskItem'

import styles from './TaskList.module.css'
import { NoTaskPanel } from './NoTaskPanel'

interface TaskListProps {
  tasks: Task[]
  onTaskCompletedChanged: (task: Task) => void
  onTaskDeleted: (task: Task) => void
}

export function TaskList({ onTaskCompletedChanged, onTaskDeleted, tasks }: TaskListProps) {
  const totalTasks = tasks.length;
  const totalDone = tasks.filter(t => t.isDone).length

  return (
    <>
      <div className={styles.header}>
        <div className={styles.flexRow}>
          <p className={styles.tasksCreated}>Tarefas criadas</p><span className={styles.badge}>{totalTasks}</span>
        </div>
        <div className={styles.flexRow}>
          <p className={styles.tasksDone}>Concluídas</p><span className={styles.badge}>{totalDone} de {totalTasks}</span>
        </div>
      </div>
      <div className={styles.content}>
        {tasks.length == 0 ? <NoTaskPanel /> : tasks.map(t => {
          return <TaskItem
            task={t}
            onTaskCompletedClick={onTaskCompletedChanged}
            onTaskDeleted={onTaskDeleted} />
        })}
      </div>
    </>
  )
}