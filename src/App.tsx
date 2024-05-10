import { Header } from './components/Header'

import styles from './App.module.css'
import { InputBar } from './components/InputBar'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.app}>
        <InputBar placeholder='Adicione uma nova tarefa' />
      </div>
    </>
  )
}