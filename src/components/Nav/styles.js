import { styled } from '@mui/material/styles';

export const StyledNav = styled('nav')(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "0 60px",
    backgroundColor: "#005ea5",
    borderBottom: "4px solid #0a74be",
    width: "100%",
    zIndex: "11000",
    [theme.breakpoints.down('sm')]: {
        padding: "10px 15px 0px",        
    },
    position: "fixed",                
    top: "0",
}));

export const StyledLogoLink = styled('a')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
}));

export const StyledLogo = styled('div')(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    outlineColor: "#e8f4f8",
    '& img': {
        width: "90px !important",
        height: "auto !important",
        [theme.breakpoints.down('sm')]: {
            width: "80px !important",
        },
    },
}));

export const StyledContainer = styled('ul')(({ theme }) => ({
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
        display: "none",
    },
}));

export const StyledItem = styled('li')(({ theme }) => ({
    padding: "10px 0 0px",
    marginRight: "20px",
    outlineColor: "#e8f4f8",
}));

export const StyledLink = styled('a')(({ theme, $subsection }) => ({
    color: $subsection ? "#bebebe" : "#f6f7fa",
    fontWeight: "700",
    fontSize: "15px",
    textDecoration: "none",
    outlineColor: "#e8f4f8",
}));

export const StyledLinkButton = styled('span')(({ theme }) => ({
    color: "#f6f7fa",
    fontWeight: "600",
    fontSize: "14px",
    textAlign: "center",
    textDecoration: "none",
    textTransform: "uppercase",
}));

export const StyledHamburgerButton = styled('div')(({ theme }) => ({
    display: "none",
    cursor: "pointer",
    outlineColor: "#e8f4f8",
    marginRight: "0px",
    [theme.breakpoints.down('md')]: {
        display: "block",
    },
    '& img': {
        height: "50px !important",
        width: "auto !important",
    },
}));

export const StyledNavChildren = styled('div')(({ theme }) => ({
    position: "fixed",
    height: "50px",
    width: "100%",
    top: "70px",
    zIndex: "9999",
}));

export const StyledMobileListContainer = styled('div')(({ theme, $mobileNavOpen }) => ({
    display: "none",
    width: $mobileNavOpen ? "250px" : 0,
    height: "110vh",
    position: "fixed",
    right: "0",
    top: "0",
    float: "right",
    color: "#ffffff",
    overflowX: "hidden",
    overflowY: "hidden",
    zIndex: "10000",

    [theme.breakpoints.down('md')]: {
        display: "flex",
        justifyContent: "center",
    },
}));

export const StyledScrollContainer = styled('div')(({ theme, $mobileNavOpen }) => ({
    position: "absolute",
    right: $mobileNavOpen ? "0" : "-252px",
    transition: "right 0.5s",
}));

export const StyledMobileList = styled('ul')(({ theme }) => ({
    display: "flex",
    listStyle: "none",
    alignItems: "flex-start",
    flexDirection: "column",
    backgroundColor: "#005ea5",
    position: "absolute",
    right: "0",
    top: "0",
    margin: "0",
    width: "252px",
    height: "110vh",
    padding: "100px 25px",
    zIndex: "11000",
}));

export const StyledDonateRedButton = styled('button')(({ theme }) => ({
    backgroundColor: "#ef6a6e",
    fontSize: "14px",
    fontWeight: "400",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.15",
    color: "#ffffff",
    borderRadius: "25px",
    margin: "20px 0",
}));

export const StyledDonateRedButtonDesktop = styled('a')(({ theme }) => ({
    width: "160px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    backgroundColor: "#ef6a6e",
    borderRadius: "25px",
    padding: "0 20px",
    textDecoration: "none",
    color: "#ffffff",
    fontWeight: "500",
    fontSize: "14px",
    textTransform: "uppercase",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    transition: "all 0.2s ease",
    '&:hover': {
        backgroundColor: "#d94448",
        textDecoration: "none",
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
        transform: "translateY(-1px)",
    },
}));

export const StyledFadeBackground = styled('div')(({ theme }) => ({
    position: "fixed",
    top: "0",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(255,255,255, 0.5)",
    zIndex: "9999",
    display: "none",

    [theme.breakpoints.down('md')]: {
        display: "block",
    },
}));

export const StyledTwitterHandle = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    width: "120px",
    alignItems: "center",
}));

export const StyledLangSelect = styled('select')(({ theme }) => ({
    margin: "15px 24px 0px 0px",
}));
