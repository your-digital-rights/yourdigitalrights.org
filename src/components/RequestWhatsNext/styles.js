import { styled } from '@mui/material/styles';

export const StyledRoot = styled('div')(({ theme }) => ({
  paddingBottom: "0px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFF",
  textAlign: "left",
  [theme.breakpoints.down('md')]: {
    padding: "20px 0px 0px",
  },
}));

export const StyledContainer = styled('div')(({ theme }) => ({
  paddingTop: "25px",
  fontSize: "18px",
  fontWeight: "normal",
  lineHeight: "27px",
  maxWidth: "860px",
  boxSizing: "border-box",
  margin: "0px auto",
  width: "860px",
  [theme.breakpoints.down('md')]: {
    width: "90%",
  },
}));

export const StyledHeader = styled('h2')(({ theme }) => ({
  fontSize: "38px",
  color: theme.palette.primary.main,
}));

export const StyledButtons = styled('ul')(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  listStyle: "none",
  margin: "39px 0 0",
  padding: "0px 0px 20px",
}));

export const StyledButton = styled('div')(({ theme }) => ({
  margin: "0 10px 10px 10px",
  borderRadius: "24px 24px 24px 24px",
  color: "white",
  color: "#fff",
  background: theme.palette.primary.main,
  [theme.breakpoints.down('md')]: {
    marginTop: "10px",
    marginLeft: "0px",
  },
}));