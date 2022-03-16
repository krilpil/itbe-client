import React from 'react'
import styles from './categoryMenu.module.scss'
import MenuLi from "./menuLi";

const CategoryMenu = () => {
    return (
        <div>
            <h3 className={styles['menu-panel__category-title']}>Товары</h3>
            <ul className={styles['menu-panel__category-list']}>
                <MenuLi name={'show'} title={'Показать все'}/>
                <MenuLi name={'add'} title={'Добавить'}/>
            </ul>
        </div>
    )
}

export default CategoryMenu