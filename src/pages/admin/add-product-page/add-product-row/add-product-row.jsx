import React from 'react';
import styles from "../add-product-page.module.scss";

const AddProductRow = ({title, children}) => {
    return (
        <div className={styles['add-product-row']}>
            <p className={styles['add-product-row__title']}>{title}:</p>
            <div className={styles['add-product-row__choice']}>
                {children}
            </div>
        </div>
    );
};

export default AddProductRow;