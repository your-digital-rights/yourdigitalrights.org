import React, { Children } from 'react';
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
import sar from '../../email-templates/sar';

const Style = (theme) => ({
    border: {
      borderRadius: "24px 24px 24px 24px",
    }
});


const options = ['Default', 'Gmail', 'Outlook', 'Copy'];


const EmailSendButton = ({ classes, text, emailType}) => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const generateEmailFields = () => {
        if (emailType === 'DELETION' || emailType === 'ACCESS') {
            const emailTemplate = emailType === 'DELETION' ? erasureEmail : sarEmail;
            const to = data.companyEmail;
            const cc = data.followUp === "YES" ? getInboundEmailAddress(data.uuid, 'request') : null;
            const reference = data.followUp === "YES" ? `(ref: ${uuid.split("-")[0]})` : "";
            const subject =  emailTemplate.subject(data);
            const body =  emailTemplate.formatBody(data);
        } else if (emailType === 'REMINDER') {
            
        } else if (emailType === 'ESCALATION') {
            
        } else {
            throw new Error(`Unsupported email type: ${emailType}`); 
        }
        return {to, cc, subject, body}
    };

    const getLink = (data) => {
        console.info(`getLink ${data}`);
    }

    const handleClick = () => {
        console.info(`You clicked the emailSendButton defualt`);
        /*const {to, cc, subject, body} = generateEmailFields();
        window.open(mailtoLink({
            to,
            cc,
            subject,
            body,
        }));*/
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        console.info(`You clicked emailSend menu item ${options[selectedIndex]}`);
        console.info(`emailTo ${emailTo}`);
        setOpen(false);
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
                    type="submit"
                >
                    {text}
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
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
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
                                    {options.map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            selected={index === selectedIndex}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            {option}
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