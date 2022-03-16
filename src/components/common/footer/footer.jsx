import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer__created}>created by Bespalov</p>
        </footer>
    )
}

export default Footer