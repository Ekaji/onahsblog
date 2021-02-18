import React from 'react';
import styles from '../../styles/Layout.module.css'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'

const Layout = ({ children }) => {
    return(
        <div className={styles.Layout}>
          <Header />
            <main> {children} </main>
          <Footer />
        </div>
    )
}

export default Layout;