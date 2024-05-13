import styles from './TaskItem.module.css'

export interface Task {
  id: number;
  description: string;
  isDone: boolean;
}

interface TaskItemProps {
  task: Task
}

export function TaskItem({ task }: TaskItemProps) {
  return (
    <></>
  )
}