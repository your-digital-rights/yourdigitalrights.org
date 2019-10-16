import { container } from '../../styles/layout'
import { themeBg } from '../../styles/theme'

export default theme => ({
    hero: {
        backgroundColor: theme.palette.primary.main,
        // borderTop: "5px black solid",
        ...themeBg,
    },
    heading: {
        maxWidth: '850px !important',
        margin: 'auto auto',
    },
    container: {
        padding: '30px',
        boxSizing: 'border-box',
        ...container,
        [theme.breakpoints.up('md')]: {
            padding: '76px 30px',
            backgroundImage: "url('static/mascot.svg')",
            backgroundPosition: 'right 130px top 120px',
            backgroundRepeat: 'no-repeat',
        },
    },
    intro: {
        maxWidth: '550px',
    },
    WhiteText: {
        color: 'white',
    },
    introEnd: {
        marginBottom: '50px',
        maxWidth: '530px',
    },
    titleImg: {
        width: '300px',
        maxWidth: '75%',
    },
    title: {
        marginBottom: 0,
    },
    introLink: {
        color: '#e89e15',
        fontWeight: 'bold',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
})
