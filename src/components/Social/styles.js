import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';

export const Root = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "50px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "baseline",
}));

export const OffsetThankYou = styled(Root)(() => ({
  paddingTop: "50px",
  marginTop: -10,
}));

export const Offset = styled(Root)(() => ({
  paddingTop: "200px",
  marginTop: -160,
}));

export const ShareHeading = styled(Typography)(() => ({
  color: "white",
  marginBottom: "30px",
  flex: "1 0 100%",
  fontWeight: "bold",
}));

export const ShareButton = styled('div')(() => ({
  marginLeft: "15px",
}));

export const ExtensionHelperPlaceHolder = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginBottom: "60px",
  paddingTop: "90px",
  [theme.breakpoints.down('md')]: {
    marginTop: "-100px",
    paddingTop: "150px",
  },
}));

export const ExtensionHelperContainer = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "900px",
  [theme.breakpoints.down('md')]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const ExtensionHelpImgContainer = styled('div')(({ theme }) => ({
  display: "flex",
  marginTop: "40px",
  [theme.breakpoints.down('md')]: {
    marginTop: "0",
    marginBottom: "30px",
  },
}));

export const ExtensionHelpImg = styled('img')(({ theme }) => ({
  width: "390px",
  height: "197px",
  objectFit: "contain",
  [theme.breakpoints.down('md')]: {
    width: "300px",
  },
}));

export const ExtensionHelpTextContainer = styled('div')(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "430px",
  fontFamily: theme.palette.fontFamily,
  textAlign: "left",
  [theme.breakpoints.down('md')]: {
    width: "100%",
  },
}));

export const ExtensionHelpHeading = styled(Typography)(() => ({
  marginBottom: "10px",
}));

export const ExtensionHelpParagraph = styled(Typography)(() => ({
  marginBottom: "30px",
}));

export const ExtensionHelpButtonContainer = styled('div')(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
}));

export const ExtensionDownloadButton = styled(Fab)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingLeft: "10px",
  paddingRight: "20px",
  height: "39px",
  borderRadius: "32px",
  backgroundColor: "#eaeaea",
  color: "#585858",
  marginBottom: "20px",
  fontSize: "16px",
  textTransform: "capitalize",
  fontWeight: "bold",
  textAlign: "left",
}));

export const ExtensionDownloadButtonIcon = styled('div')(() => ({
  width: "28px",
  height: "28px",
  marginRight: "10px",
  fontSize: "40px",
  textAlign: "left",
}));

export const ExtensionDownloadButtonIconFireFox = styled(ExtensionDownloadButtonIcon)(() => ({
  marginLeft: "3px",
}));