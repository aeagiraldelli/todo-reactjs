import { ChangeEvent, FormEvent, InputHTMLAttributes, useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'

import styles from './InputBar.module.css'

interface InputBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onInputTask: (taskDescription: string) => void
}

export function InputBar({ onInputTask, ...props }: InputBarProps) {
  const [task, setTask] = useState('')

  function onTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setTask(event.target.value)
  }

  function handleOnButtonClick(event: FormEvent) {
    event.preventDefault()
    onInputTask(task);
    setTask('')
  }

  return (
    <form className={styles.inputBar}>
      <input
        type="text"
        name="todo-text"
        id="todo-text"
        value={task}
        {...props}
        onChange={onTaskChange}
      />
      <button
        type="submit"
        disabled={task !== null && task.length == 0}
        onClick={handleOnButtonClick}>
        Criar <PlusCircle size={25} />
      </button>
    </form>
  )
}