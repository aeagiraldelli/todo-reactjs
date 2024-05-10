import { NotePencil } from '@phosphor-icons/react'

import styles from './Header.module.css'

export function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.content}>
          {/* <img src={rocketPng} /> */}
          <NotePencil size={50} />
          <span className={styles.contentBody}>
            <span className={styles.to}>to</span><span className={styles.do}>do</span>
          </span>
        </div>
      </div>
    </>
  )
}