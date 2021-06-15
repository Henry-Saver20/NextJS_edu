import styles from './layout.module.css'
import React from 'react'
export default function layout ({ children }) {
  return <div className={styles.container}>{children}</div>
}
