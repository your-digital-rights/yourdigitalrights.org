import React from "react";

import styles from "./styles";
import { RedirectHeadingText, RedirectText, ContinueText } from "./text";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { injectIntl } from "react-intl";
import withStyles from '@mui/styles/withStyles';
import Image from 'next/image';
import Close from "../../../public/images/close.svg";
import Logo from "../../../public/images/logo.svg";

const Overlay = (props) => {
  const { classes } = props;

  const backdropProps = { classes: { root: classes.backdrop } };

  return (
    <Modal BackdropProps={backdropProps} open={true} onClose={props.close}>
      <Card className={classes.paper} elevation={10}>
        <button onClick={() => props.close()} className={classes.close}>
          <Image src={Close} className={classes.closeImg} />
        </button>

        <header id="redirectOverlay" className={classes.header}>
          <Image
            src={Logo}
            alt="yourdigitalrights.org"
            className={classes.logo}
          />
          <Typography className={classes.heading} variant="h4">
            {RedirectHeadingText}
          </Typography>
        </header>

        <Typography component="p" className={classes.copy} variant="subtitle1">
          {RedirectText}
        </Typography>

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="large"
          onClick={props.close}
        >
          {ContinueText}
        </Button>
      </Card>
    </Modal>
  );
};

export default injectIntl(withStyles(styles)(Overlay));
