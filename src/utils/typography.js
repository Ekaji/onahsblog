import Typography from 'typography'
import sternGroveTheme from 'typography-theme-stern-grove'
import '../styles/blog.styles.css'

sternGroveTheme.baseFontSize = '18px'
sternGroveTheme.bodyTypeFace = 'roboto'

sternGroveTheme.overrideThemeStyles = () => ({
    'body': {
        '--light-text': '#fff',
        wordSpacing: '5px',
        lineHeight: '30px'
    },

    'body.light': {
        '--bg': ' #FFF',
        '--text': '#374045',
        '--blue': '#304FFE',
        '--border': 'var(--blueish)',
        '--card': '#ECEFF1',
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
        fontFamily: 'Montserrat, sans-serif',
        'overflow-x': 'hidden'
    },
    
    'body.dark': {
        '--bg': '#000000',
        '--blue': '#304FFE',
        '--text': ' #FFEBCF',
        '--border': 'var(--greenish)',
        '--card': '#111111',
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
        fontFamily: 'Montserrat, sans-serif',
        'overflow-x': 'hidden'
    },
    p : {
        fontSize: '18px',
    },
    'h1,h2,h3': {
        color: 'var(--text)',
    },
    h2: {
        fontSize: '20px'
    },
    a: {
        color: 'var(--text)'
    }
})

const typography = new Typography(sternGroveTheme)
typography.injectStyles()

export default typography;