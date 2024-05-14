import { Trash } from '@phosphor-icons/react';
import styles from './TaskItem.module.css'
import { InputHTMLAttributes } from 'react';

export interface Task {
  id: number;
  description: string;
  isDone: boolean;
}

interface TaskItemProps {
  onTaskCompletedClick: (task: Task) => void
  onTaskDeleted: (task: Task) => void
  task: Task
}

export function TaskItem({ onTaskCompletedClick, onTaskDeleted, task }: TaskItemProps) {

  function handleCheckboxOnClick() {
    const t = task
    t.isDone = !task.isDone
    onTaskCompletedClick(t)
  }

  function handleDeleteTask() {
    onTaskDeleted(task)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <input
          className={styles.checkboxRound}
          type="checkbox"
          name="taskDone"
          id="taskDone" checked={task.isDone}
          onChange={handleCheckboxOnClick} />
        <p
          className={task.isDone ? styles.taskDescriptionCompleted : styles.taskDescription}
          onClick={handleCheckboxOnClick}>
          {task.description}
        </p>
      </div>
      <Trash className={styles.icon} onClick={handleDeleteTask} />
    </div>
  )
}