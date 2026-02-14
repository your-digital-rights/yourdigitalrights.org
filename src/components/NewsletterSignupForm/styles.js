import { styled } from "@mui/material/styles";

export const StyledContainer = styled("div", {
  shouldForwardProp: prop => prop !== "layout" && prop !== "tone",
})(({ theme, layout, tone }) => ({
  width: "100%",
  maxWidth: layout === "compact" ? "360px" : "520px",
  margin: "0 auto",
  color: tone === "inverted" ? "rgba(255, 255, 255, 0.92)" : "inherit",
}));

export const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  alignItems: "stretch",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const StyledInput = styled("input", {
  shouldForwardProp: prop => prop !== "tone",
})(({ theme, tone }) => ({
  flex: 1,
  minWidth: 0,
  border: tone === "inverted" ? "1px solid rgba(255, 255, 255, 0.45)" : "1px solid rgba(0, 0, 0, 0.2)",
  borderRadius: "8px",
  padding: "12px 14px",
  fontSize: "16px",
  lineHeight: 1.3,
}));

export const StyledSubmitButton = styled("button")(({ theme }) => ({
  border: 0,
  borderRadius: "8px",
  padding: "12px 18px",
  minWidth: "130px",
  fontWeight: 700,
  color: "#ffffff",
  backgroundColor: "#005EA5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  whiteSpace: "nowrap",
  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const StyledStatus = styled("div", {
  shouldForwardProp: prop => prop !== "statusType" && prop !== "tone",
})(({ statusType, tone }) => ({
  marginTop: "10px",
  minHeight: "20px",
  fontSize: "14px",
  color: statusType === "error"
    ? (tone === "inverted" ? "#FFE5E5" : "#C62828")
    : (tone === "inverted" ? "#E8FFEA" : "#1B5E20"),
}));

export const StyledSkeleton = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "stretch",
  },
}));

export const StyledSkeletonInput = styled("div", {
  shouldForwardProp: prop => prop !== "tone",
})(({ theme, tone }) => ({
  height: "46px",
  flex: 1,
  borderRadius: "8px",
  background: tone === "inverted"
    ? "linear-gradient(90deg, rgba(255,255,255,0.18) 25%, rgba(255,255,255,0.32) 37%, rgba(255,255,255,0.18) 63%)"
    : "linear-gradient(90deg, rgba(255,255,255,0.55) 25%, rgba(255,255,255,0.8) 37%, rgba(255,255,255,0.55) 63%)",
  backgroundSize: "400% 100%",
  animation: "ydr-newsletter-shimmer 1.4s ease infinite",
  "@keyframes ydr-newsletter-shimmer": {
    "0%": {
      backgroundPosition: "100% 0",
    },
    "100%": {
      backgroundPosition: "0 0",
    },
  },
}));

export const StyledSkeletonButton = styled("div", {
  shouldForwardProp: prop => prop !== "tone",
})(({ theme, tone }) => ({
  height: "46px",
  width: "130px",
  borderRadius: "8px",
  background: tone === "inverted"
    ? "linear-gradient(90deg, rgba(255,255,255,0.18) 25%, rgba(255,255,255,0.32) 37%, rgba(255,255,255,0.18) 63%)"
    : "linear-gradient(90deg, rgba(255,255,255,0.55) 25%, rgba(255,255,255,0.8) 37%, rgba(255,255,255,0.55) 63%)",
  backgroundSize: "400% 100%",
  animation: "ydr-newsletter-shimmer 1.4s ease infinite",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const StyledDisclaimer = styled("p", {
  shouldForwardProp: prop => prop !== "tone",
})(({ tone }) => ({
  marginTop: "10px",
  marginBottom: 0,
  textAlign: "center",
  fontSize: "12px",
  lineHeight: 1.35,
  color: tone === "inverted" ? "rgba(255, 255, 255, 0.82)" : "rgba(0, 0, 0, 0.62)",
}));

export const StyledDisclaimerLink = styled("a")(() => ({
  color: "inherit",
  textDecoration: "underline",
  "&:hover": {
    textDecoration: "none",
  },
}));
