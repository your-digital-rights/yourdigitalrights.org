import { FormattedMessage } from 'react-intl'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import React, { Component, Fragment } from 'react'
import classNames from 'classnames'

const styles = theme => ({
    nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 60px',
        backgroundColor: '#005ea5',
        borderBottom: '4px solid #0a74be',
        height: '72px',
        zIndex: '11000',
        [theme.breakpoints.down('xs')]: {
            padding: '0 15px',
        },
    },
    logo: {
        width: '149px',

        [theme.breakpoints.down('xs')]: {
            width: '100px',
        },
    },
    container: {
        listStyle: 'none',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    item: {
        padding: '10px 0',
        marginRight: '24px',
    },
    link: {
        color: '#f6f7fa',
        fontWeight: 'bolder',
        fontSize: '15px',
        textDecoration: 'none',
    },
    hamburgerButton: {
        display: 'none',
        height: '50px',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    mobileListContainer: {
        display: 'none',
        width: '300px',
        height: '100%',
        position: 'absolute',
        right: '0',
        float: 'right',
        color: '#ffffff',
        overflowX: 'hidden',
        zIndex: '10000',

        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
        },
    },
    scrollOut: {
        position: 'absolute',
        right: '-200px',
        transition: ' right 0.5s',
    },
    scrollIn: {
        position: 'absolute',
        right: '0',
        transition: 'right 0.5s',
    },
    mobileList: {
        display: 'flex',
        listStyle: 'none',
        alignItems: 'flex-start',
        flexDirection: 'column',
        backgroundColor: '#005ea5',
        position: 'absolute',
        right: '0',
        margin: '0',
        width: '200px',
    },
})

const NavItem = ({ href, text, classes }) => {
    return (
        <li className={classes.item}>
            <Typography component="a" href={href} className={classes.link}>
                {text}
            </Typography>
        </li>
    )
}

const NavListDesktop = ({ classes }) => {
    return (
        <ul className={classes.container}>
            <NavItem
                href="/#howItWorks"
                text={
                    <FormattedMessage
                        id="howItWorks"
                        defaultMessage="How it works"
                    />
                }
                classes={classes}
            />
            <NavItem
                href="/#faq"
                text={<FormattedMessage id="faq" defaultMessage="FAQ" />}
                classes={classes}
            />
            <NavItem
                href="/data-brokers"
                text={
                    <FormattedMessage
                        id="data-brokers"
                        defaultMessage="Data Brokers"
                    />
                }
                classes={classes}
            />
            <NavItem
                href="/#Extension"
                text={
                    <FormattedMessage
                        id="Extension"
                        defaultMessage="Browser Extension"
                    />
                }
                classes={classes}
            />
            <NavItem
                href="/about"
                text={<FormattedMessage id="about" defaultMessage="About" />}
                classes={classes}
            />
        </ul>
    )
}

const NavListMobile = ({ classes, mobileNavOpen }) => {
    return (
        <div className={mobileNavOpen ? classes.scrollIn : classes.scrollOut}>
            <ul className={classes.mobileList}>
                <NavItem
                    href="/#howItWorks"
                    text={
                        <FormattedMessage
                            id="howItWorks"
                            defaultMessage="How it works"
                        />
                    }
                    classes={classes}
                />
                <NavItem
                    href="/#faq"
                    text={<FormattedMessage id="faq" defaultMessage="FAQ" />}
                    classes={classes}
                />
                <NavItem
                    href="/data-brokers"
                    text={
                        <FormattedMessage
                            id="data-brokers"
                            defaultMessage="Data Brokers"
                        />
                    }
                    classes={classes}
                />
                <NavItem
                    href="/about"
                    text={
                        <FormattedMessage id="about" defaultMessage="About" />
                    }
                    classes={classes}
                />
                <p>OPT OUT RED THING</p>
                <NavItem
                    href="/#Extension"
                    text={
                        <FormattedMessage
                            id="Extension"
                            defaultMessage="Browser Extension"
                        />
                    }
                    classes={classes}
                />
            </ul>
        </div>
    )
}
class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileNavOpen: false,
        }
        this.toggleMenu = React.createRef()
        this.hamburgerButton = React.createRef()

        this.toggleMobileNav = this.toggleMobileNav.bind(this)
        this.handleCloseNav = this.handleCloseNav.bind(this)
    }

    componentDidMount() {
        window.addEventListener('click', this.handleCloseNav)
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleCloseNav)
    }

    toggleMobileNav() {
        this.setState(currentState => {
            return {
                mobileNavOpen: !currentState.mobileNavOpen,
            }
        })
    }

    handleCloseNav(event) {
        if (
            this.state.mobileNavOpen &&
            !this.toggleMenu.current.contains(event.target) &&
            !this.hamburgerButton.current.contains(event.target)
        ) {
            this.setState({ mobileNavOpen: false })
        }
    }

    render() {
        const { classes } = this.props
        const { mobileNavOpen } = this.state

        return (
            <React.Fragment>
                <nav ref={this.toggleMenu} className={classes.nav} id="nav">
                    <img
                        className={classes.logo}
                        src="static/optout.svg"
                        tabIndex={0}
                    />
                    <NavListDesktop classes={classes} />
                    <img
                        className={classes.hamburgerButton}
                        src="static/hamburgerIcon.svg"
                        onBlur={this.onBlurHandler}
                        onClick={this.toggleMobileNav}
                        tabIndex={0}
                    />
                </nav>
                <div
                    ref={this.hamburgerButton}
                    className={classes.mobileListContainer}
                    onFocus={this.onFocusHandler}
                >
                    <NavListMobile
                        classes={classes}
                        mobileNavOpen={mobileNavOpen}
                    />
                </div>
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(Nav)
