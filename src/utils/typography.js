import Typography from 'typography'
import sternGroveTheme from 'typography-theme-stern-grove'
import '../styles/blog.styles.css'

sternGroveTheme.baseFontSize = '18px'
sternGroveTheme.bodyTypeFace = 'roboto'

sternGroveTheme.overrideThemeStyles = () => ({
    'body.light': {
        '--bg': ' #FFEBCF',
        '--text': '#374045',
        '--blueish': '#0277BD',
        '--border': 'var(--blueish)',
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
        fontFamily: 'Montserrat, sans-serif',
        'overflow-x': 'hidden'
    },
    
    'body.dark': {
        '--bg': '#000000',
        '--text': ' #FFEBCF',
        '--greenish': '#1DE9B6',
        '--border': 'var(--greenish)',
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
        fontFamily: 'Montserrat, sans-serif',
        'overflow-x': 'hidden'
    },
    p : {
        fontSize: '14.4px',
        letterSpacing: '1.1px'
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