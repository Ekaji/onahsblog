import React from 'react';
import styles from '../../styles/footer.module.css'
import Socials from '../portfolioComponent/Socials'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Socials />
        </div>
    )
}

export default Footer;