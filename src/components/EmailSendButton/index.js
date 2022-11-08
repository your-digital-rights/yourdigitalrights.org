import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from "@material-ui/core/styles";
import erasureEmail from "../../email-templates/erasure";
import sarEmail from "../../email-templates/sar";
import reminderEmail from "../../email-templates/reminder";
import escalationEmail from "../../email-templates/escalation";
import getInboundEmailAddress from "../../utils/email";
import mailtoLink from "mailto-link";
import { useIntl } from "react-intl";
import EmailIcon from '@material-ui/icons/Email';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Image from 'next/image'


const Style = (theme) => ({
    border: {
      borderRadius: "24px 24px 24px 24px",
    },
    menueItemIcon: {
        marginRight: "10px",
    },
    popper: {
        zIndex: "5",
    }
});

function defaultAction(to, cc, subject, body) {
    return function() {
        const link = mailtoLink({to, cc, subject, body});
        return window.open(link, "_blank", "noopener");
    };
}

function gmailAction(to, cc, subject, body) {
    return function() {
        subject = encodeURIComponent(subject);
        body = encodeURIComponent(body);
        const ccPart = cc ? `cc=${cc}` : ``;
        const link = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&${ccPart}&su=${subject}&to=${to}&body=${body}`;
        return window.open(link, "_blank", "noopener");
    };
}

function yahooAction(to, cc, subject, body) {
    return function() {
        subject = encodeURIComponent(subject);
        body = encodeURIComponent(body);
        const ccPart = cc ? `cc=${cc}` : ``;
        const link = `https://compose.mail.yahoo.com/?to=${to}&subject=${subject}&${ccPart}&body=${body}`;
        return window.open(link, "_blank", "noopener");
    };
}

function copyAction(to, cc, subject, body) {
    return function() {
        const text = (cc === null) ? 
            `to: ${to}\nsubject: ${subject}\n\n${body}` :
            `to: ${to}\ncc: ${cc}\nsubject: ${subject}\n\n${body}`;
        return navigator.clipboard.writeText(text);
    };
}

const EmailSendButton = ({ classes, children, emailType, onClick}) => {
    const intl = useIntl();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const buttonRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const emailOptions = [
        {
            name: 'Default',
            text: intl.formatMessage({id: "sendEmailButton.default", defaultMessage: "Open in your default email client"}), 
            icon: <EmailIcon className={classes.menueItemIcon}/>, 
            run: defaultAction},
        {
            name: 'Gmail',
            text: intl.formatMessage({id: "sendEmailButton.gmail", defaultMessage: "Open in Gmail"}), 
            icon: <div className={classes.menueItemIcon}><Image src="/images/sh/gmail-logo.png" alt="gmail" width={24} height={24} /></div>, 
            run: gmailAction}, 
        {
            name: 'Yahoo mail',
            text: intl.formatMessage({id: "sendEmailButton.yahoo", defaultMessage: "Open in Yahoo Mail"}), 
            icon: <div className={classes.menueItemIcon}><Image src="/images/sh/yahoo-mail-logo.png" alt="gmail" width={24} height={24} /></div>, 
            run: yahooAction}, 
        {
            name: 'Copy',
            text: intl.formatMessage({id: "sendEmailButton.copy", defaultMessage: "Copy email text to clipboard"}), 
            icon: <AssignmentIcon className={classes.menueItemIcon} />, 
            run: copyAction},
    ];
    
    var selectedAction = emailOptions[0];

    const generateEmailFields = (data) => {
        var to, cc, subject, body;
        if (emailType === 'DELETION' || emailType === 'ACCESS') {
            const emailTemplate = emailType === 'DELETION' ? erasureEmail : sarEmail;
            to = data.companyEmail;
            cc = data.followUp === "YES" ? getInboundEmailAddress(data.uuid, 'request') : null;
            subject =  emailTemplate.subject(data);
            body =  emailTemplate.body(data);
        } else if (emailType === 'REMINDER') {
            to = data.requestItem.requestEmailTo.S;
            cc = getInboundEmailAddress(data.requestItem.id.S, 'reminder');
            subject = reminderEmail.subject(data);
            body = reminderEmail.body(data);
        } else if (emailType === 'ESCALATION') {
            to = data.geo.email;
            cc = `${data.requestItem.requestEmailTo.S},${getInboundEmailAddress(data.requestItem.id.S, 'escalation')}`;
            subject = escalationEmail.subject(data);
            body = escalationEmail.body(data);                
        } else {
            throw new Error(`Unsupported email type: ${emailType}`); 
        }
        return {
            name: selectedAction.name, 
            run: selectedAction.run(to, cc, subject, body)
        };
    };

    const handleClick = () => {
        onClick(generateEmailFields);
        setOpen(false);
    };

    const handleMenuItemClick = (event, index) => {
        selectedAction = emailOptions[index];
        buttonRef.current.click();
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button" className={classes.border}>
                <Button 
                    onClick={handleClick} 
                    className={classes.border} 
                    ref={buttonRef}
                    type="submit"
                >
                    {children}
                </Button>
                <Button
                    color="primary"
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="Review & Send"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                    className={classes.border}
                >
                    <ArrowDropDownIcon />
                </Button>
            </ButtonGroup>
            <Popper open={open} className={classes.popper} anchorEl={anchorRef.current} role={undefined} transition disablePortal >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu">
                                    {emailOptions.map((option, index) => (
                                        <MenuItem
                                            key={option.name}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            {option.icon}
                                            {option.text}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
}

export default withStyles(Style)(EmailSendButton);