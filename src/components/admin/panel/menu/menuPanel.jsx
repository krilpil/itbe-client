import React from 'react'
import styles from './menuPanel.module.scss'
import CategoryMenu from "./categoryMenu/categoryMenu";

const MenuPanel = () => {
    return (
        <div className={styles['menu-panel']}>
            <CategoryMenu/>
        </div>
    )
}

export default MenuPanel