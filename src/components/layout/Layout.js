import React from 'react';
import styles from '../../styles/Layout.module.css'
import  '../../styles/ThemeSwitch.css'
import Footer from '../../components/layout/Footer'
import ColorSchemeSwitch from '../../components/layout/ColorSchemeSwitch'
import '../../styles/blog.styles.css'
import "normalize.css"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

const Layout = ({ children }) => {
    return(
        <div className={styles.Layout}>
          <div className='ThemeSwitch'>
            <ColorSchemeSwitch />
          </div>
            <main style={{minHeight: '40vh'}}> {children} </main>
          <Footer />
        </div>
    )
}

export default Layout;