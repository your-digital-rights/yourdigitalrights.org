import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Root = styled(Paper)(({ theme }) => ({
  borderRadius: "20px",
  maxWidth: "1000px",
  margin: "auto",
  marginBottom: "30px",
  textAlign: "center",
  position: "relative",
  [theme.breakpoints.down('md')]: {
    marginTop: "-120px",
  },
}));

export const Content = styled('div')(({ theme }) => ({
  padding: "60px 77px 15px 77px",
  [theme.breakpoints.down('md')]: {
    padding: "60px 25px 0 25px",
  },
}));

export const Title = styled(Typography)(() => ({
  marginBottom: "20px",
}));

export const Text = styled(Typography)(() => ({
  textAlign: "left",
}));

export const DonateButton = styled(Button)(() => ({
  marginBottom: "30px",
  borderRadius: "24px 24px 24px 24px",
  color: "white",
  fontWeight: "600",
  padding: "10px 20px",
  "&:hover": {
    background: "#04487B",
  },
}));

export const StartAgainBtn = styled(Button)(() => ({
  borderRadius: "24px 24px 24px 24px",
  position: "absolute",
  left: "50%",
  bottom: 0,
  transform: "translate(-50%,50%)",
  color: "white",
  fontWeight: 800,
}));