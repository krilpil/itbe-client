import React from 'react'
import styles from './categoryMenu.module.scss'
import {NavLink} from "react-router-dom";

const MenuLi = (props) => {
    let classNames = `menu-panel__category-list-li_${props.name}`

    return (
        <NavLink to={props.name} className={({isActive}) => isActive ? styles['menu-panel__category-list_active'] : ''}>
            <li className={styles[classNames]}>{props.title}</li>
        </NavLink>
    )
}

export default MenuLi