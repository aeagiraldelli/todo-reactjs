import { PlusCircle } from '@phosphor-icons/react'

import styles from './InputBar.module.css'
import { ChangeEvent, InputHTMLAttributes, useState } from 'react'

interface InputBarProps extends InputHTMLAttributes<HTMLInputElement> { }

export function InputBar({ ...props }: InputBarProps) {
  const [task, setTask] = useState('')

  function onTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setTask(event.target.value)
  }

  return (
    <form className={styles.inputBar}>
      <input
        type="text"
        name="todo-text"
        id="todo-text"
        {...props}
        onChange={onTaskChange}
      />
      <button type="submit" disabled={task !== null && task.length == 0}>
        Criar <PlusCircle size={25} />
      </button>
    </form>
  )
}