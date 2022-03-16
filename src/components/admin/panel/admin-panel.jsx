import React from 'react'
import styles from './admin-panel.module.scss'

const AdminPanel = ({children}) => {
    return (
        <div className={styles.panel}>
            {children}
        </div>
    )
}

export default AdminPanel