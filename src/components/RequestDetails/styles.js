import { styled } from '@mui/material/styles';

export const Root = styled('div')(({ theme }) => ({
  marginBottom: "40px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFF",
  textAlign: "left",
}));

export const Container = styled('div')(({ theme }) => ({
  maxWidth: "860px",
  boxSizing: "border-box",
  [theme.breakpoints.down('md')]: {
    padding: "30px 30px 0px",
    width: "100%",
  },
}));

export const Header = styled('h2')(({ theme }) => ({
  fontSize: "38px",
  color: theme.palette.primary.main,
}));

export const Details = styled('div')(({ theme }) => ({
  padding: "28px 50px",
  color: theme.palette.primary.main,
  fontWeight: "normal",
}));

export const DetailsList = styled('dl')(({ theme }) => ({
  fontSize: "18px",
  lineHeight: "24px",
  "& dt": {
    float: "left",
    clear: "left",
    fontWeight: "bold",
    padding: "0 0.5em 15px 0",
  },
  "& dd": {
    margin: "0",
    paddingBottom: "15px",
  },
}));

export const ShowEmail = styled('a')(({ theme }) => ({
  textDecoration: "underline",
  cursor: "pointer",
}));

export const ShowFullEmail = styled('dd')(({ theme }) => ({
  clear: "left",
}));

export const HideFullEmail = styled('dd')(({ theme }) => ({
  height: "0",
  overflow: "hidden",
  clear: "left",
}));