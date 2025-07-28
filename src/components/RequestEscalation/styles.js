import { styled } from '@mui/material/styles';

export const Root = styled('div')(({ theme }) => ({
  paddingBottom: "80px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#ffffff",
  textAlign: "left",
}));

export const Container = styled('div')(({ theme }) => ({
  paddingTop: "30px",
  maxWidth: "860px",
  boxSizing: "border-box",
  [theme.breakpoints.down('md')]: {
    padding: "30px 30px 0px",
    width: "100%",
  },
}));

export const FormContainer = styled('div')(({ theme }) => ({
  maxWidth: "860px",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
}));

export const FormButton = styled('div')(({ theme }) => ({
  marginTop: "2rem",
  borderRadius: "24px 24px 24px 24px",
}));

export const ButtonStyled = styled('div')(({ theme }) => ({
  width: "200px",
  margin: "0 10px 10px 30px",
  borderRadius: "24px 24px 24px 24px",
  color: "white",
  background: theme.palette.primary.main,
  [theme.breakpoints.down('md')]: {
    marginTop: "10px",
    marginLeft: "0px",
  },
}));

export const Disclamer = styled('div')(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down('md')]: {
    marginTop: "10px",
    marginLeft: "0px",
    marginRight: "0px", 
  },    
}));
