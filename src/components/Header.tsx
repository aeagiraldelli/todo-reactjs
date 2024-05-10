import { RocketLaunch } from '@phosphor-icons/react'
import styles from './Header.module.css'

export function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.content}>
          {/* <img src={rocketPng} /> */}
          <RocketLaunch size={50} />
          <span className={styles.contentBody}>
            <span className={styles.to}>to</span><span className={styles.do}>do</span>
          </span>
        </div>
      </div>
    </>
  )
}