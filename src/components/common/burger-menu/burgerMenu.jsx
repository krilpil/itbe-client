import React from 'react';
import style from './burgerMenu.module.scss'
import {NavLink} from "react-router-dom";

const BurgerMenu = ({burgerMenuActive, setBurgerMenuActive}) => {
    return (
        <nav className={burgerMenuActive ? style['burger-menu--active'] : style['burger-menu']}>
            <h3 className={style['burger-menu__title']}>Товары</h3>
            <div className={style['burger-menu__list']}>
                <NavLink
                    onClick={() => setBurgerMenuActive(!burgerMenuActive)}
                    to={'/panel/product-search'}
                    className={({isActive}) => isActive ? style['burger-menu__list--active'] : ''}
                >
                    Найти товар
                </NavLink>
                <NavLink
                    onClick={() => setBurgerMenuActive(!burgerMenuActive)}
                    to={'/panel/product-add'}
                    className={({isActive}) => isActive ? style['burger-menu__list--active'] : ''}
                >
                    Добавить товар
                </NavLink>
            </div>
        </nav>
    );
};

export default BurgerMenu;