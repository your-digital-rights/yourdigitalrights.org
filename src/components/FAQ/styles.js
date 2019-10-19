export default theme => ({
    container: {
        maxWidth: '777px',
        margin: 'auto',
        padding: '30px',
        paddingBottom: 0,
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            padding: '90px 60px 0',
            margin: '0 auto 0',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '-60px',
            paddingTop: '150px',
        },
    },
    title: {
        textAlign: 'center',
        marginBottom: '1.5em',
    },
    list: {
        margin: '20px 0',
    },
})
