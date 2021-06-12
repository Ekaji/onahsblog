---
title: A complete guide on building a blog using gatsby
author: Nikola
date: 2021-02-16
tags: gatsby
featuredImage: ../images/BingWallpaper.jpg
---

#
### Layout component
layout component are for sections you want to reuse accross your site.
examples of this are your navbar, hero section and footer, to create layout component create a layout folder
in your ./src/components we also create two files a header.js and footer.js within the layout folder then in the 
header.js we add the following
```
//header.js
import React from 'react';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>My Blog</h1>
        </header>
    )
}

export default Header;

``` 
and in the footer.js add this

```
import React from 'react';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h3>this is the footer</h3>
        </footer>
    )
}

export default Footer;
```

then in the ./src/styles folder we create the styles using css modules which is a personal choise, you can style your content using whatever method you prefare.
we create a header.module.css and a footer.module.css then add the following code.
```
//header.module.css
.header{
    background-color: aqua;
    width: 100vw;
    height: 40vh;
}
```
and in the footer.module.css
```
.footer{
    background-color: aqua;
    width: 100vw;
    height: 20vh;
    margin-top: auto;
}
```
then we import and use the newly created css modules as such

```
//header.js
import React from 'react';
import styles from '../../styles/header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Onahs Blog</h1>
        </header>
    )
}

export default Header;
```
```
import React from 'react';
import styles from '../../styles/footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h3>this is the footer</h3>
        </footer>
    )
}

export default Footer;
```

then we use it into our blog component

### setting global styles in gatsby

### how to dynamicaly create pages and link to them