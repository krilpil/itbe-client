import React from 'react'

import styles from './header.module.scss'
import {Link} from "react-router-dom";

const Header = ({setBurgerMenuActive, burgerMenuActive}) => {

    return (
        <header>
            <div className={styles['navbar']}>
                <button className={styles['navbar__menu-button']} onClick={() => setBurgerMenuActive(!burgerMenuActive)} />
                <Link to={'/home'} className={styles['navbar__logotype']}/>
            </div>
        </header>
    )
}

export default Header


