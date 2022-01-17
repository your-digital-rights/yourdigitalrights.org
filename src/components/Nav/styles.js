const Theme = (theme) => ({
    nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 60px",
        backgroundColor: "#005ea5",
        borderBottom: "4px solid #0a74be",
        height: "72px",
        width: "100%",
        zIndex: "11000",
        [theme.breakpoints.down("xs")]: {
            padding: "0 15px",        
        },
        position: "fixed",                
        top: "0",
    },
    logoLink: {
        display: "flex",
        justifyContent: "center",
    },
    logo: {
        width: "90px",
        outlineColor: "#e8f4f8",

        [theme.breakpoints.down("xs")]: {
            width: "80px",
        },
    },
    container: {
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    item: {
        padding: "10px 0 0px",
        marginRight: "24px",
        outlineColor: "#e8f4f8",
    },
    link: {
        color: "#f6f7fa",
        fontWeight: "bolder",
        fontSize: "15px",
        textDecoration: "none",
        outlineColor: "#e8f4f8",
    },
    linkButton: {
        color: "#f6f7fa",
        fontWeight: "600",
        fontSize: "14px",
        textAlign: "center",
        textDecoration: "none",
        outlineColor: "#e8f4f8",
        textTransform: "uppercase",
    },
    subsectionLink: {
        color: "#bebebe",
        fontWeight: "bolder",
        fontSize: "15px",
        textDecoration: "none",
        outlineColor: "#e8f4f8",
    },
    hamburgerButton: {
        display: "none",
        height: "50px",
        cursor: "pointer",
        outlineColor: "#e8f4f8",

        [theme.breakpoints.down("sm")]: {
            display: "block",
        },
    },
    navChildren: {
        position: "fixed",
        height: "50px",
        width: "100%",
        top: "70px",
        zIndex: "9999",
    },
    mobileListContainer: {
        display: "none",
        width: "250px",
        height: "110vh",
        position: "fixed",
        right: "0",
        top: "0",
        float: "right",
        color: "#ffffff",
        overflowX: "hidden",
        overflowY: "hidden",
        zIndex: "10000",

        [theme.breakpoints.down("sm")]: {
            display: "flex",
            justifyContent: "center",
        },
    },
    hideMobContainer: {
        width: 0,
    },
    showMobContainer: {
        width: "250px",
    },
    scrollOut: {
        position: "absolute",
        right: "-252px",
        transition: " right 0.5s",
    },
    scrollIn: {
        position: "absolute",
        right: "0",
        transition: "right 0.5s",
    },
    mobileList: {
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
    },
    OptOutRedButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
        height: "40px",
        backgroundColor: "#ef6a6e",
        fontSize: "14px",
        fontWeight: "400",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.15",
        color: "#ffffff",
        borderRadius: "25px",
        margin: "25px 0",
        outlineColor: "#e8f4f8",
        cursor: "pointer",
        paddingLeft: "20px",
        paddingRight: "20px",
        textDecoration: "none",
    },
    OptOutRedButtonDesktop: {
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
        marginRight: "24px",
        paddingLeft: "20px",
        paddingRight: "20px",
        textDecoration: "none",
    },
    fadeBackground: {
        position: "fixed",
        top: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255,255,255, 0.5)",
        zIndex: "9999",
        display: "none",

        [theme.breakpoints.down("sm")]: {
            display: "block",
        },
    },
    twitterHandle: {
        display: "flex",
        justifyContent: "space-between",
        width: "120px",
        alignItems: "center",
    },
    langSelect :{
        margin: "15px 24px 0px 0px",
    }
});

export default Theme;