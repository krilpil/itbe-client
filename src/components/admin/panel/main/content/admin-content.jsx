import React from 'react'
import styles from './admin-content.scss'

const AdminContent = ({children}) => {
    return (
        <div className={styles['content']}>
            {children}
        </div>
    )
}

export default AdminContent