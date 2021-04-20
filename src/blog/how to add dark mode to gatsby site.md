---
title: How to add dark mode to gatsby website
author: Ekaji
date: 2021-02-23
tags: gatsby
featuredImage: ../images/24078.jpg
---

##
to add dark mode to your gatsby blog you would need to install gatsby-plugin-dark-mode and react-dark-mode-toggle. to do this run the following your terminal.

for NPM
```
npm i gatsby-plugin-dark-mode react-dark-mode-toggle
```
if your using yarn you need to run 
```
yarn add gatsby-plugin-dark-mode react-dark-mode-toggle
```

and then add the plugin to your gatsby.config.js 

``` 
plugins: [  
// ... Other plugins 
    ' gatsby-plugin-dark-mode'
]
```
next create a new component, i named mine ThemeSwitch

```
//ThemeSwitch.js
import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import DarkModeToggle from 'react-dark-mode-toggle'

class ThemeSwitch extends React.Component {
    render() {
        return (
            <ThemeToggler>
                {({ theme, toggleTheme }) => (
                    <DarkModeToggle
                    onChange = {e => toggleTheme(e ? 'dark' : 'light')}
                    checked = { theme === 'dark'}
                    size = {60}
                    speed = {2}
                    />
                )}
            </ThemeToggler>
        )
    }
}

export default ThemeSwitch
```

then import the ThemeSWitch component into your layout component file.

if you go to your website you should see the theme switch but if you click the toggle it does nothing, but if you go to the dev tools and inspect it you should see the class on the body element toggle between 'light' and 'dark
we would use this to set our theme, in the css file your using in your layout.js add your styles for your prefered light and dark mode using css variables.

```
body{
    --bg: white;
    --text: #00000080;
    backgroundColor: var(--bg);
    color: var(--text); 
};

body.dark{
    --bg: #374045;
    --text: #FFEBCF;
    backgroundColor: var(--bg);
    color: var(--text);
};


```
Note: if your using typography.js add the styles there instead.
```
//typography.js 
import Typography from 'typography'
import sternGroveTheme from 'typography-theme-stern-grove'
import '../styles/blog.styles.css'

Typography.overrideThemeStyles = () => ({
    'body.light': {
        '--bg': 'white ',
        '--text': '#00000080',
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
    },
    
    'body.dark': {
        '--bg': '#374045 ',
        '--text': ' #FFEBCF',
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
    },
    'h1,h2': {
        color: 'var(--text)',
    }
})

const typography = new Typography(sternGroveTheme)

export default typography;
```

now if you toggle the switch the theme should change as expected.
