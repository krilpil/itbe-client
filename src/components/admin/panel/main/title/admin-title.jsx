import React from 'react';
import styles from "../content/admin-content.scss";
import {Link, Outlet} from "react-router-dom";

const AdminTitle = ({title}) => {
    return (
        <div className={styles['content__header']}>
            <h2 className={styles['content__header-title']}>
                {title}
            </h2>
            <ul className={styles['content__header-bread-crumbs']}>
                <li className={styles['content__header-bread-crumbs-li']}><Link to={'/panel'}>Панель</Link></li>
                <li className={styles['content__header-bread-crumbs-li']}>{title}</li>
            </ul>
        </div>
    );
};

export default AdminTitle;