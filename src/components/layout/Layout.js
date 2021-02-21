import React from 'react';
import styles from '../../styles/Layout.module.css'
import Footer from '../../components/layout/Footer'
import ColorSchemeSwitch from '../../components/layout/ColorSchemeSwitch'
import '../../styles/colorscheme.styles.css'
import "normalize.css"

const Layout = ({ children }) => {
    return(
        <div className={styles.Layout}>
          <ColorSchemeSwitch />
            <main style={{minHeight: '40vh'}}> {children} </main>
          <Footer />
        </div>
    )
}

export default Layout;