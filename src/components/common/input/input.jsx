import React from 'react';
import styles from "./input.module.scss";

const Input = ({type, placeholder}) => {
    const inputType = type === undefined ? 'text' : type

    return (
        <input className={styles['input']} placeholder={placeholder} type={inputType}/>
    );
};

export default Input;