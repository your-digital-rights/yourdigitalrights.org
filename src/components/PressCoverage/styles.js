import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
  backgroundColor: "#f2f2f2",
  position: "relative",
  paddingTop: "30px",
  textAlign: "center",
}));

export const Inner = styled('div')(({ theme }) => ({
  display: 'flex',
  overflow: 'hidden',
  flexGrow: 1,
  flexWrap: "wrap",
  justifyContent: "center",
  paddingTop: "30px",
  paddingBottom: "30px",
  paddingLeft: "60px",
  paddingRight: "60px",
  [theme.breakpoints.down('md')]: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
}));

export const GridList = styled('div')(({ theme }) => ({
  width: "80%",
  display: "flex",
  flexWrap: "wrap", 
  justifyContent: "space-around",
  alignItems: "center",
  gap: "35px",
  [theme.breakpoints.down('md')]: {
    gap: "25px",
    justifyContent: "space-around",
  },
}));

export const GridListItem = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "35px",
  flex: "0 1 auto",
  maxWidth: "120px",
  [theme.breakpoints.down('md')]: {
    flex: "1 1 45%",
    height: "30px",
    maxWidth: "100px",
  },
}));

export const PressLogo = styled('img')(({ theme }) => ({
  objectFit: "contain",
  maxHeight: "100%",
  maxWidth: "100%",
  height: "auto",
  width: "auto",
}));
