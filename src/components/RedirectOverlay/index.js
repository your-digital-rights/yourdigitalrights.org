import React from "react";

import * as S from "./styles";
import { RedirectHeadingText, RedirectText, ContinueText } from "./text";
import Modal from "@mui/material/Modal";
import { useIntl } from "react-intl";
import Close from "../../../public/images/close.svg";
import Logo from "../../../public/images/logo.svg";

const Overlay = (props) => {
  const intl = useIntl();
  const backdropProps = { 
    sx: S.backdropStyle
  };

  return (
    <Modal BackdropProps={backdropProps} open={true} onClose={props.close}>
      <S.Paper elevation={10}>
        <S.Close onClick={() => props.close()}>
          <S.CloseImg src={Close} />
        </S.Close>

        <S.Header id="redirectOverlay">
          <S.Logo
            src={Logo}
            alt="yourdigitalrights.org"
          />
          <S.Heading variant="h4">
            {RedirectHeadingText}
          </S.Heading>
        </S.Header>

        <S.Copy component="p" variant="subtitle1">
          {RedirectText}
        </S.Copy>

        <S.StyledButton
          variant="contained"
          color="primary"
          size="large"
          onClick={props.close}
        >
          {ContinueText}
        </S.StyledButton>
      </S.Paper>
    </Modal>
  );
};

export default Overlay;
