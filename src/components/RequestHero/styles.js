import { styled } from '@mui/material/styles';

export const Root = styled('div')(({ theme }) => ({
  paddingBottom: "55px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.primary.main,
  textAlign: "left",
  color: "white",
  [theme.breakpoints.down('md')]: {
    padding: "60px 0px 55px",
  },
}));

export const Container = styled('div')(({ theme }) => ({
  paddingTop: "80px",
  maxWidth: "860px",
  boxSizing: "border-box",
  margin: "0px auto",
  width: "860px",
  [theme.breakpoints.down('md')]: {
    padding: "20px 30px 0px",
    width: "100%",
  },
}));

export const Header = styled('h1')(({ theme }) => ({
  fontSize: "38px",
  fontWeight: "normal",
  marginBottom: "-15px",
  [theme.breakpoints.down('md')]: {
    fontSize: "28px",
  },    
}));

export const Status = styled('h2')(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "normal",
  marginBottom: "30px",
  [theme.breakpoints.down('md')]: {
    fontSize: "16px",
  },      
}));

export const Ref = styled('div')(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "normal",
  marginBottom: "30px",
  [theme.breakpoints.down('md')]: {
    fontSize: "16px",
  },      
}));

export const Buttons = styled('ul')(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  listStyle: "none",
  margin: "0",
  padding: "0",
}));

export const ButtonStyled = styled('div')(({ theme }) => ({
  margin: "0 10px 10px 0",
  borderRadius: "24px 24px 24px 24px",
  color: "#858585",
  fontWeight: "600",
  padding: "10px 20px",
  background: "#e0e0e0",
  "&:hover": {
    background: "#fff",
  },
  [theme.breakpoints.down('md')]: {
    padding: "10px",
    fontSize: "12px",
  },      
}));

export const PrimaryButton = styled('div')(({ theme }) => ({
  margin: "0 10px 10px 0",
  borderRadius: "24px 24px 24px 24px",
  color: "#fff",
  fontWeight: "600",
  padding: "10px 20px",
  background: "#00ae8d",
  "&:hover": {
    background: "#00ae8d",
  },
  [theme.breakpoints.down('md')]: {
    padding: "10px",
    fontSize: "12px",
  },      
}));