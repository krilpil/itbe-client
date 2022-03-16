import React, {useState} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import routes from "../constants/routes";

import styles from "./app.module.scss";
import '/src/styles/main.module.scss'
import '../styles/fontface.module.scss'

import Header from "./common/header/header";
import Footer from "./common/footer/footer";
import BurgerMenu from "./common/burger-menu/burgerMenu";
import AddProductPage from "../pages/admin/add-product-page/add-product-page";

const App = () => {
    const [burgerMenuActive, setBurgerMenuActive] = useState(false)

    // creating routes from a list
    const routeList = (routes) => {
        return routes.map(({path, page}) => {
            return (
                <Route key={path} path={path} element={page}/>
            )
        })
    }

    return (
        <React.Fragment>
            <Header
                setBurgerMenuActive={setBurgerMenuActive}
                burgerMenuActive={burgerMenuActive}
            />
            <BurgerMenu
                setBurgerMenuActive={setBurgerMenuActive}
                burgerMenuActive={burgerMenuActive}
            />
            <div className={burgerMenuActive ? styles['content-none'] : styles['content']}>
                <Routes>
                    {routeList(routes)}
                    <Route path={'*'} element={<Navigate to={'/home'} />}/>
                </Routes>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default App

