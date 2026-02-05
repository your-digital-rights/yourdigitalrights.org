import { styled } from '@mui/material/styles';
import { visuallyHidden } from "../../styles/layout";

export const StyledSearchInputWrapper = styled('div')(({ theme }) => ({
  padding: "6px 16px",
}));

export const StyledLabel = styled('label')(({ theme }) => ({
  ...visuallyHidden,
}));

export const StyledForm = styled('form')(({ theme }) => ({
  position: "relative",
  height: "44px",
  [theme.breakpoints.up("md")]: {
    maxWidth: "80%",
    margin: "80px auto 0",
  },
}));

export const StyledResults = styled('div')(({ theme }) => ({
  position: "absolute",
  width: "100%",
  zIndex: 1000,
}));

export const StyledSearchIcon = styled('div')(({ theme }) => ({
  marginRight: "16px",
}));

export const StyledList = styled('div')(({ theme }) => ({
  padding: 0,
}));

export const StyledSearchItem = styled('div')(({ theme }) => ({
  fontSize: 14,
  fontWeight: 400,
  marginLeft: "15px",
  lineHeight: "1.5em",
}));
