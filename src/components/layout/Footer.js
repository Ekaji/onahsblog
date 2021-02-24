import React from 'react';
import styles from '../../styles/footer.module.css'
import Contact from '../portfolioComponent/Contact'
import Socials from '../portfolioComponent/Socials'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Contact />
            <Socials />
        </footer>
    )
}

export default Footer;