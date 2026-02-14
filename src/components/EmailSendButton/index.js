import React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import erasureEmail from "../../email-templates/erasure";
import sarEmail from "../../email-templates/sar";
import reminderEmail from "../../email-templates/reminder";
import escalationEmail from "../../email-templates/escalation";
import getInboundEmailAddress from "../../utils/email";
import mailtoLink from "mailto-link";
import { useIntl } from "react-intl";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Image from "next/image"
import * as S from "./styles";

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

const EmailSendButton = ({ children, emailType, onClick}) => {
    const intl = useIntl();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const buttonRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const emailOptions = [
        {
            name: 'Default',
            text: intl.formatMessage({id: "sendEmailButton.default", defaultMessage: "Open in your default email client"}), 
            icon: <S.MenuItemIcon><EmailIcon /></S.MenuItemIcon>, 
            run: defaultAction},
        {
            name: 'Gmail',
            text: intl.formatMessage({id: "sendEmailButton.gmail", defaultMessage: "Open in Gmail"}), 
            icon: <S.MenuItemIcon><Image src="/images/sh/gmail-logo.png" alt="gmail" width={24} height={24} /></S.MenuItemIcon>, 
            run: gmailAction}, 
        {
            name: 'Yahoo mail',
            text: intl.formatMessage({id: "sendEmailButton.yahoo", defaultMessage: "Open in Yahoo Mail"}), 
            icon: <S.MenuItemIcon><Image src="/images/sh/yahoo-mail-logo.png" alt="gmail" width={24} height={24} /></S.MenuItemIcon>, 
            run: yahooAction}, 
        {
            name: 'Copy',
            text: intl.formatMessage({id: "sendEmailButton.copy", defaultMessage: "Copy email text to clipboard"}), 
            icon: <S.MenuItemIcon><AssignmentIcon /></S.MenuItemIcon>, 
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
            to = data.requestItem.requestEmailTo;
            cc = getInboundEmailAddress(data.requestItem.id, 'reminder');
            subject = reminderEmail.subject(data);
            body = reminderEmail.body(data);
        } else if (emailType === 'ESCALATION') {
            to = data.geo.email;
            cc = `${data.requestItem.requestEmailTo},${getInboundEmailAddress(data.requestItem.id, 'escalation')}`;
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
            <S.BorderButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                <S.BorderButton 
                    onClick={handleClick} 
                    ref={buttonRef}
                    type="submit"
                >
                    {children}
                </S.BorderButton>
                <S.BorderButton
                    color="primary"
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="Review & Send"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <ArrowDropDownIcon />
                </S.BorderButton>
            </S.BorderButtonGroup>
            <S.StyledPopper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal >
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
            </S.StyledPopper>
        </>
    );
}

export default EmailSendButton;
