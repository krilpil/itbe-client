import React from 'react';
import styles from './select.module.scss'

const Select = (props) => {
    const list = props.list === undefined ? ['Список не найден'] : props.list
    const title = props.title === undefined ? 'Выберите пункт' : props.title

    const options = list.map(item => {
        return <option>{item}</option>
    })

    return (
        <select className={styles['select']}>
            <option disabled selected>{title}</option>
            {options}
        </select>
    );
};

export default Select;