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
    },
    
    'body.dark': {
        '--bg': '#374045 ',
        '--text': ' #FFEBCF',
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
    },
    'h1,h2': {
        color: 'var(--text)',
    },
    h2: {
        fontSize: '20px'
    }
})

const typography = new Typography(sternGroveTheme)

export default typography;