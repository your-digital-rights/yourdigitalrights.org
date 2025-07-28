import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';

export const Paper = styled(Card)(() => ({
  padding: "40px 50px",
  textAlign: "center",
  maxWidth: "700px",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  borderRadius: "20px",
}));

export const Close = styled('button')(() => ({
  position: "absolute",
  top: "40px",
  right: "40px",
  background: "none",
  border: "none",
  fontWeight: "bold",
  width: "30px",
  height: "30px",
  outline: "none",
}));

export const CloseImg = styled(Image)(() => ({
  width: "150%",
}));

export const Header = styled('header')(() => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  marginBottom: "40px",
  textAlign: "left",
}));

export const Heading = styled(Typography)(() => ({
  fontSize: "1.75em",
  lineHeight: "1.1em",
  color: "#005ea5",
  flex: "0",
}));

export const StyledButton = styled(Button)(() => ({
  marginTop: "40px",
  borderRadius: "30px",
  fontWeight: "bold",
  fontSize: "1.25em",
}));

export const Logo = styled(Image)(() => ({
  width: "125px",
}));

export const Copy = styled(Typography)(() => ({
  marginRight: "20px",
  marginLeft: "20px",
  fontSize: "0.8125em",
}));

export const backdropStyle = {
  backgroundColor: "rgba(255,255,255,0.5)",
};