import { Notepad } from '@phosphor-icons/react'
import styles from './NoTaskPanel.module.css'

export function NoTaskPanel() {
  return (
    <div className={styles.container}>
      <Notepad className={styles.icon} />
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}