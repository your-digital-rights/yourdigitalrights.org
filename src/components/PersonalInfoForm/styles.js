import styled from '@emotion/styled';

export const StyledFormContainer = styled('form')(({ theme }) => ({
  position: "relative",
  maxWidth: "777px",
  margin: "-130px auto 60px",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    padding: "60px",
    margin: "-180px auto 50px",
  },
}));

export const StyledFormButton = styled('div')(({ theme }) => ({
  marginTop: "30px",
}));

export const StyledFormControl = styled('fieldset')(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

export const StyledGroup = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
  flexDirection: "row",
}));

export const StyledIntroText = styled('div')(({ theme }) => ({
  paddingBottom: "500px",
}));

export const StyledSupportButton = styled('button')(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "auto",
  height: "40px",
  backgroundColor: "#ef6a6e",
  fontSize: "14px",
  fontWeight: "800",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "1.15",
  color: "#ffffff",
  borderRadius: "25px",
  outlineColor: "#e8f4f8",
  cursor: "pointer",
  paddingLeft: "20px",
  paddingRight: "20px",
  textDecoration: "none",
}));

export const StyledSupportLink = styled('a')(({ theme }) => ({
  textDecoration: "none",
}));

export const StyledSupport = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  marginTop: "-40px",
  marginBottom: "20px",
  marginRight: "-30px",
  [theme.breakpoints.down("md")]: {
    marginTop: "-10px",
    marginBottom: "20px",
    marginRight: "-10px",
  },    
}));