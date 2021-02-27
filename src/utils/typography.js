import Typography from 'typography'
import sternGroveTheme from 'typography-theme-stern-grove'
import '../styles/blog.styles.css'

sternGroveTheme.baseFontSize = '18px'
sternGroveTheme.bodyTypeFace = 'roboto'

sternGroveTheme.overrideThemeStyles = () => ({
    'body.light': {
        '--bg': 'white ',
        '--text': '#00000080',
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
        fontFamily: 'Montserrat, sans-serif',
    },
    
    'body.dark': {
        '--bg': '#374045 ',
        '--text': ' #FFEBCF',
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
        fontFamily: 'Montserrat, sans-serif',
    },
    p : {
        fontSize: '14.4px',
        letterSpacing: '1.1px'
    },
    'h1,h2': {
        color: 'var(--text)',
    },
    h2: {
        fontSize: '20px'
    }
})

const typography = new Typography(sternGroveTheme)
typography.injectStyles()

export default typography;