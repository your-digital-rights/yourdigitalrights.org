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
  justifyContent: "space-around",
  paddingBottom: "30px",
}));

export const GridList = styled('div')(({ theme }) => ({
  width: "80%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  gap: "50px",
}));

export const GridListItem = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "50px",
}));

export const PressLogo = styled('img')(({ theme }) => ({
  objectFit: "contain",
  maxHeight: "100%",
  maxWidth: "100%",
}));
