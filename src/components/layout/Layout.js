import React from 'react';
import styles from '../../styles/Layout.module.css'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import "normalize.css"

const Layout = ({ children }) => {
    return(
        <div className={styles.Layout}>
          <Header />
            <main style={{minHeight: '40vh'}}> {children} </main>
          <Footer />
        </div>
    )
}

export default Layout;