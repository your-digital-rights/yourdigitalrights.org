import { FormattedMessage } from 'react-intl'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import React, { Component, Fragment } from 'react'

const styles = theme => ({
    nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 60px',
        backgroundColor: '#005ea5',
        borderBottom: '4px solid #0a74be',
        height: '72px',
        width: '100%',
        zIndex: '11000',
        [theme.breakpoints.down('xs')]: {
            padding: '0 15px',
        },
        position: 'fixed',
        top: '0',
    },
    logo: {
        width: '149px',
        outlineColor: '#e8f4f8',

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
        outlineColor: '#e8f4f8',
    },
    link: {
        color: '#f6f7fa',
        fontWeight: 'bolder',
        fontSize: '15px',
        textDecoration: 'none',
        outlineColor: '#e8f4f8',
    },
    hamburgerButton: {
        display: 'none',
        height: '50px',
        cursor: 'pointer',
        outlineColor: '#e8f4f8',

        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    mobileListContainer: {
        display: 'none',
        width: '200px',
        height: '100vh',
        position: 'fixed',
        right: '0',
        top: '0',
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
        top: '0',
        margin: '0',
        width: '200px',
        height: '100vh',
        padding: '100px 25px',
        zIndex: '11000',
    },
    OptOutRedButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '115px',
        height: '40px',
        backgroundColor: '#ef6a6e',
        fontSize: '14px',
        fontWeight: '800',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.15',
        letterSpacing: '1.25px',
        color: '#ffffff',
        borderRadius: '25px',
        margin: '25px 0',
        outlineColor: '#e8f4f8',
        cursor: 'pointer',
    },
    fadeBackground: {
        position: 'fixed',
        top: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(255,255,255, 0.5)',
        zIndex: '9999',
        display: 'none',

        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
})

const NavItem = ({ href, text, classes, onClickHandler }) => {
    return (
        <li className={classes.item} onClick={onClickHandler}>
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

const NavListMobile = ({ classes, mobileNavOpen, toggleMobileNav }) => {
    return (
        <div className={mobileNavOpen ? classes.scrollIn : classes.scrollOut}>
            <ul className={classes.mobileList}>
                <NavItem
                    onClickHandler={toggleMobileNav}
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
                    onClickHandler={toggleMobileNav}
                    href="/#faq"
                    text={<FormattedMessage id="faq" defaultMessage="FAQ" />}
                    classes={classes}
                />
                <NavItem
                    onClickHandler={toggleMobileNav}
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
                    onClickHandler={toggleMobileNav}
                    href="/about"
                    text={
                        <FormattedMessage id="about" defaultMessage="About" />
                    }
                    classes={classes}
                />
                <div className={classes.OptOutRedButton} tabIndex={0}>
                    <a
                        href="/#topOfPage"
                        onClick={toggleMobileNav}
                        className={classes.link}
                    >
                        <Typography component="a" className={classes.link}>
                            OPT OUT
                        </Typography>
                    </a>
                </div>

                <NavItem
                    onClickHandler={toggleMobileNav}
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
        this.menuItem = React.createRef()

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
            <div>
                <nav ref={this.toggleMenu} className={classes.nav} id="nav">
                    <a href="/">
                        <img
                            className={classes.logo}
                            src="static/optout.svg"
                            tabIndex={0}
                            href="/"
                        />
                    </a>
                    <NavListDesktop classes={classes} />
                    <img
                        className={classes.hamburgerButton}
                        src={
                            mobileNavOpen
                                ? 'static/close-icon.svg'
                                : 'static/hamburgerIcon.svg'
                        }
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
                        toggleMobileNav={this.toggleMobileNav}
                    />
                </div>
                {mobileNavOpen && <div className={classes.fadeBackground} />}
            </div>
        )
    }
}
export default withStyles(styles)(Nav)
