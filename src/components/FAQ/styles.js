import styled from '@emotion/styled';

export const StyledContainer = styled('div')(({ theme }) => ({
  maxWidth: "1000px",
  margin: "auto",
  padding: "30px",
  paddingBottom: 0,
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    padding: "60px 60px 0",
    margin: "60px auto 0",
  },
  [theme.breakpoints.down('md')]: {
    marginTop: "-120px",
    paddingTop: "150px",
  },
}));

export const StyledTitle = styled('h2')(({ theme }) => ({
  textAlign: "center",
  marginBottom: "1.5em",
}));

export const StyledAccordionBody = styled('div')(({ theme }) => ({
  justifyContent: "center",
}));

export const StyledList = styled('div')(({ theme }) => ({
  margin: "0px 24px",
  color: "#2F4F4F",
}));

export const StyledUList = styled('ul')(({ theme }) => ({
  margin: "0px 24px",
  color: "#2F4F4F",
}));