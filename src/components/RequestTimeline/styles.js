import { styled } from '@mui/material/styles';

export const StyledRoot = styled('div')(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  textAlign: "left",
  [theme.breakpoints.down('md')]: {
    padding: "60px 0px 0px",
  },
}));

export const StyledContainer = styled('div')(({ theme }) => ({
  paddingBottom: "25px",
  paddingTop: "25px",
  maxWidth: "860px",
  boxSizing: "border-box",
  margin: "0px auto",
  width: "860px",
  [theme.breakpoints.down('md')]: {
    width: "90%",
    paddingBottom: "0px",
    paddingTop: "0px",
  },
}));

export const StyledHeader = styled('h2')(({ theme }) => ({
  fontSize: "38px",
  color: theme.palette.primary.main,
}));

export const StyledTimeline = styled('ul')(({ theme }) => ({
  display: "flex",
  listStyle: "none",
  margin: "0",
  padding: "54px 0 0",
  fontSize: "14px",
  justifyContent: "space-between",
}));

export const StyledTimelineItem = styled('li')(({ theme }) => ({
  textAlign: "center",
  flex: "1 1 0",
  position: "relative",
  wordWrap: "break-word",
  "&::before": {
    position: "absolute",
    top: "-12px",
    left: "50%",
    marginLeft: "-6px",
    display: "block",
    content: "'   '",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
  },
  "&::after": {
    position: "absolute",
    left: "0px",
    top: "-6px",
    display: "block",
    content: "'   '",
    width: "100%",
    borderTop: "1px solid",
    borderTopColor: theme.palette.primary.main,
  },
  "&:first-of-type::after": {
    left: "50%",
    width: "50%",
  },
  "&:last-of-type::after": {
    width: "50%",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "8px 30px",
  },
}));

export const StyledTimelineTracker = styled('div')(({ theme }) => ({
  width: "32px",
  height: "32px",
  lineHeight: "32px",
  fontSize: "12px",
  color: theme.color,
  backgroundColor: theme.palette.muted.main,
  borderRadius: "50%",
  position: "absolute",
  top: "-50px",
  "& span": {
    position: "relative",
  },
  "&::after": {
    position: "absolute",
    bottom: "-18px",
    left: "10px",
    display: "block",
    content: "'   '",
    width: "12px",
    height: "12px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50%",
  },
  "&::before": {
    position: "absolute",
    bottom: "0",
    left: "0",
    display: "block",
    content: "'   '",
    width: "50%",
    height: "50%",
    backgroundColor: theme.palette.muted.main,
    transform: "rotate(-45deg)",
    transformOrigin: "top right",
  },
}));