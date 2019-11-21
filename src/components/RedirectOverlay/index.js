import React from 'react';

import styles from './styles';
import { RedirectHeadingText, RedirectText, ContinueText } from './text';

import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { injectIntl } from "react-intl"
import { withStyles } from "@material-ui/core/styles";

const Overlay = (props) => {
  const { classes } = props;

  const backdropProps = { classes: { root: classes.backdrop } };

  return (
    <Modal
      BackdropProps={backdropProps}
      open={true}
      onClose={props.close}>
      <Card
        className={classes.paper}
        elevation={10}>
          <button
            onClick={() => props.close()}
            className={classes.close}><img src="/static/close.svg" className={classes.closeImg} /></button>

          <header id="redirectOverlay" className={classes.header}>
            <img src="/static/logo.svg" alt="yourdigitalrights.org" className={classes.logo}/>
            <Typography
              className={classes.heading}
              variant="display1">
                {RedirectHeadingText}
            </Typography>
          </header>

        <Typography
          component="p"
          className={classes.copy}
          variant="subheading">{RedirectText}</Typography>

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="large"
          onClick={props.close}>{ContinueText}</Button>
      </Card>
    </Modal>
  );
};

export default injectIntl(withStyles(styles)(Overlay));
