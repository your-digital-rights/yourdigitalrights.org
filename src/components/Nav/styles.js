import styled from '@emotion/styled';

export const StyledNav = styled('nav')(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "0 60px",
    backgroundColor: "#005ea5",
    borderBottom: "4px solid #0a74be",
    width: "100%",
    zIndex: "11000",
    [theme.breakpoints.down('sm')]: {
        padding: "0 15px",        
    },
    position: "fixed",                
    top: "0",
}));

export const StyledLogoLink = styled('a')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
}));

export const StyledLogo = styled('img')(({ theme }) => ({
    width: "90px",
    outlineColor: "#e8f4f8",
    height: "auto",
    [theme.breakpoints.down('sm')]: {
        width: "80px",
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
    fontWeight: "bolder",
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

export const StyledHamburgerButton = styled('img')(({ theme }) => ({
    display: "none",
    height: "50px",
    cursor: "pointer",
    outlineColor: "#e8f4f8",
    marginRight: "-45px",
    [theme.breakpoints.down('md')]: {
        display: "block",
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
    height: "40px",
    backgroundColor: "#ef6a6e",
    borderRadius: "25px",
    paddingLeft: "20px",
    paddingRight: "20px",
    textDecoration: "none",
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